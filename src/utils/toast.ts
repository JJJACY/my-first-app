import { toastController } from '@ionic/vue';

export async function Toast (message: string,color?: string){
  const toast = await toastController
    .create({
      message: message,
      duration: 1000,
      position: 'middle',
      color: color,
      mode:'md'
    })
  return toast.present(); 
}