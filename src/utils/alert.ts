import { alertController } from '@ionic/vue';

export async function alert(msg: string){
  const Alert = await alertController
    .create({
      cssClass: 'myalert-class',
      // header: 'Confirm!',
      message: `<strong>${msg}</strong>!!!`,
      mode: 'ios',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          // cssClass: 'secondary',
          handler: blah => {
            console.log('Confirm Cancel:', blah)
          },
        },
        {
          text: '確認',
          handler: () => {
            console.log('Confirm Okay')
          },
        },
      ],
    });
  return Alert.present();
}