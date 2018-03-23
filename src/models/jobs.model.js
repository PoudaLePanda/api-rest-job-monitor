// jobs-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function(app) {
    const mongooseClient = app.get('mongooseClient');
    const { Schema } = mongooseClient;
    const jobs = new Schema({
        name: { type: String },
        source: { type: String },
        site: { type: String },
        campagne: { type: String },
        dateCommande: { type: Date, default: null },
        dateProd: { type: Date, default: null },
        dateDelivery: { type: Date, default: null },
        dateExpedition: { type: Date, default: null },
        client: { type: String },
        graphiste: { type: String },
        formatFini: { type: String },
        quantity: { type: Number },
        codeCiscom: { type: String },
        status: {
            type: String,
            enum: [
                'Annulée',
                'En attente de validation',
                'En attente affectation PAO',
                'PAO',
                'Pré-production',
                'Impression',
                'Façonnage',
                'Mise sous pli',
                'Expédition',
                'Facturation',
                'Terminée'
            ],
            default: 'En attente de validation',
            required: true
        }
    }, {
        timestamps: true
    });

    return mongooseClient.model('jobs', jobs);
};