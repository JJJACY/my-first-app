import { toastController } from '@ionic/vue';

export async function Toast (message: string){
  const toast = await toastController
    .create({
      message: message,
      duration: 2000,
      position: 'middle',
    })
  return toast.present(); 
}