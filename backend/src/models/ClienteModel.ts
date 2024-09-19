import mongoose, { Schema, model, Document } from 'mongoose';


interface ICliente extends Document {
  nome: string;
  email: string;
  status: 'Ativo' | 'Inativo';
}


const ClienteSchema = new Schema<ICliente>({
  nome: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  status: {
    type: String,
    enum: ['Ativo', 'Inativo'],
    default: 'Ativo' 
  }
}, {
  timestamps: true 
});


export default mongoose.model<ICliente>("Cliente", ClienteSchema, "cliente") ;

