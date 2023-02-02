import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public options: Array<any> = [
    { icon: 'person-add-outline', text: 'Indicar amigos'},
    { icon: 'phone-portrait-outline', text: 'Recarga de celular'},
    { icon: 'wallet-outline', text: 'Depositar'},
    { icon: 'options-outline', text: 'Opções'},
    { icon: 'person-add-outline', text: 'Indicar amigos'},
    { icon: 'help-circle-outline', text: 'Ajuda'},
    { icon: 'barcode-outline', text: 'Pagar'},
    { icon: 'lock-open-outline', text: 'Bloquear cartão'},
    { icon: 'card-outline', text: 'Cartão virtual'}
  ]

  public slideOptions: any = {slidesPerView: 3, freeMode: true}

  public itens: Array<any> = [
    { icon: 'help-circle-outline', text: 'Me ajuda'},
    { icon: 'person-outline', text: 'Perfil'},
    { icon: 'cash-outline', text: 'Configurar conta'},
    { icon: 'card-outline', text: 'Configurar cartão'},
    { icon: 'phone-portrait-outline', text: 'Configurações do app'}
  ]

  public initialStep: Number = 0;
  private maxTranslate: Number;
  private animation: Animation;


  constructor(
    private animationCtrl: AnimationController,
    private platform: Platform;
  ) {
    this.maxTranslate = this.platform.height() - 200;
  }

  ngAfterViewInit() {
    this.createAnimation()
  }

  createAnimation() {
    this.animation = this.animationCtrl.create()
    .addElement()
    .duration(300)
    .fromTo('transform', 'translateY(0)', 'translateY(${this.maxTranslate}px)')
  }

}
