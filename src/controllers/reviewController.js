const Review = require('../models/review');

// Cria uma nova avaliação
async function create(req, res) {
    try {
        const { usuario, filme, serie, rating, comentario } = req.body;
        
        // Verifica se foi passado tanto filme quanto série
        if (filme && serie) {
            return res.status(400).json({ error: 'Avaliação deve referenciar apenas filme ou série, não ambos.' });
        }

        const review = new Review({
            usuario,
            filme: filme || null,
            serie: serie || null,
            rating,
            comentario
        });

        const reviewCriada = await review.save();
        res.status(201).json(reviewCriada);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Obtém todas as avaliações
async function getAll(req, res) {
    try {
        const reviews = await Review.find()
            .populate('usuario', 'nome')
            .populate('filme', 'titulo')
            .populate('serie', 'titulo');
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Obtém uma avaliação por ID
async function getById(req, res) {
    try {
        const review = await Review.findById(req.params.id)
            .populate('usuario', 'nome')
            .populate('filme', 'titulo')
            .populate('serie', 'titulo');
        if (!review) {
            return res.status(404).json({ error: 'Avaliação não encontrada' });
        }
        res.json(review);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Atualiza uma avaliação
async function update(req, res) {
    try {
        const { usuario, filme, serie, rating, comentario } = req.body;
        
        // Verifica se foi passado tanto filme quanto série
        if (filme && serie) {
            return res.status(400).json({ error: 'Avaliação deve referenciar apenas filme ou série, não ambos.' });
        }

        const review = await Review.findByIdAndUpdate(req.params.id, {
            usuario,
            filme: filme || null,
            serie: serie || null,
            rating,
            comentario
        }, { new: true, runValidators: true });

        if (!review) {
            return res.status(404).json({ error: 'Avaliação não encontrada' });
        }

        res.json(review);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Remove uma avaliação
async function remove(req, res) {
    try {
        const review = await Review.findByIdAndDelete(req.params.id);
        if (!review) {
            return res.status(404).json({ error: 'Avaliação não encontrada' });
        }
        res.json({ message: 'Avaliação removida com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
};
