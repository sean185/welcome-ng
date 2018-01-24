import { Component, OnInit, ViewChild } from '@angular/core';
import { SuiModalService, TemplateModalConfig, ModalTemplate } from 'ng2-semantic-ui';

export interface IContext {
  src:string;
  caption:string;
}

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.pug',
  styleUrls: ['./photography.component.styl']
})

export class PhotographyComponent implements OnInit {
  @ViewChild('modalTemplate')
  public modalTemplate:ModalTemplate<IContext, string, string>

  photos: any[]

  constructor(public modalService:SuiModalService) {
    this.photos = [
      {
        caption: 'Olive-backed sunbird in midflight, with just enough light from the morning sun.',
        location: 'Singapore',
        src: '/assets/photos/ubin-sunbird.jpg'
      },
      {
        caption: 'Open women\'s category competitor getting chalked up.',
        location: 'Singapore',
        src: '/assets/photos/pumpfest-2017-chalk-dust.jpg'
      },
      {
        caption: 'Hiking in the moss covered landscape of Alishan National Scenic Area.',
        location: 'Alishan, Taiwan',
        src: '/assets/photos/alishan-hiking-mel.jpg'
      },
      {
        caption: 'Rolling clouds bathe the valleys at sunrise, spied from the top of Alishan',
        location: 'Alishan, Taiwan',
        src: '/assets/photos/blue_mountains_taiwan.jpg'
      },
      {
        caption: 'Star trails of a 10 minute exposure from Alishan Lauya Homestay.',
        location: 'Alishan, Taiwan',
        src: '/assets/photos/alishan-night-star-trails.jpg'
      },
      {
        caption: 'Catching the sunset at the local attraction isn\'t just for tourists at this fine-grained sandy beach.',
        location: 'Tainan, Taiwan',
        src: '/assets/photos/tainan-beach-sunset.jpg'
      },
      {
        caption: 'Monkey with a wry look, posing.',
        location: 'Kaohsiung, Taiwan',
        src: '/assets/photos/kaohsiung-park-monkey.jpg'
      },
      {
        caption: 'The burning sunset raising a fog around huge ships in the distance.',
        location: 'Kaohsiung, Taiwan',
        src: '/assets/photos/kaohsiung-sea-sunset.jpg'
      },
      {
        caption: 'A glimpse of daily life at a food cart on the streets of Bangkok.',
        location: 'Bangkok, Thailand',
        src: '/assets/photos/bangkok-street-cart.jpg'
      },
      {
        caption: 'Green tranquility of the Arashiyama Bamboo Grove.',
        location: 'Kyoto, Japan',
        src: '/assets/photos/arashiyama-bamboo.jpg'
      },
      {
        caption: 'View of Mount Fuji at dusk, a self-portrait.',
        location: 'Yamanashi, Japan',
        src: '/assets/photos/fujisan-self.jpg'
      },
      {
        caption: 'A sudden heavy snowfall entertains a toddler.',
        location: 'Kyoto, Japan',
        src: '/assets/photos/kyoto-snowing-baby.jpg'
      },
      // {
      //   caption: 'The show must go on.',
      //   location: 'Kyoto, Japan',
      //   src: '/assets/photos/kyoto-snowing-bus.jpg'
      // },
      // {
      //   caption: 'The gentleman and the beauty.',
      //   location: 'Kyoto, Japan',
      //   src: '/assets/photos/kyoto-snowing-gentleness.jpg'
      // },
      {
        caption: 'Winter is a happy time for most, the happiest time for some.',
        location: 'Kyoto, Japan',
        src: '/assets/photos/kyoto-streets-happy.jpg'
      },
      // {
      //   caption: '',
      //   location: 'Redang, Malaysia',
      //   src: '/assets/photos/redang-sunrise.jpg'
      // },
      // {
      //   caption: '',
      //   location: 'Sapporo, Japan',
      //   src: '/assets/photos/sapporo-port-sunset.jpg'
      // },
      // {
      //   caption: '',
      //   location: 'Tokyo, Japan',
      //   src: '/assets/photos/tokyo-kabukicho-sunset.jpg'
      // },
      {
        caption: 'Sunrise view from a vantage point of the Tokyo Skytree. Woke up freezing for this.',
        location: 'Tokyo, Japan',
        src: '/assets/photos/tokyo-sky-tower-sunrise.jpg'
      },
      // {
      //   caption: '',
      //   location: 'Tokyo, Japan',
      //   src: '/assets/photos/tokyo-skyline-fujisan.jpg'
      // },
    ]
  }

  open(dynamicContent:any) {
    const config = new TemplateModalConfig<IContext, string, string>(this.modalTemplate);
    config.isClosable = true;
    config.size = "large";
    config.context = dynamicContent;

    this.modalService
      .open(config)
      .onApprove(result => { /* approve callback */ })
      .onDeny(result => { /* deny callback */});
  }

  next(photo:any) {
    let picnum = this.photos.findIndex((item) => { return item.src == photo.src } );
    if (picnum < this.photos.length-1) {
      let next_photo = this.photos[picnum+1]
      this.open(next_photo)
    }
  }

  prev(photo:any) {
    let picnum = this.photos.findIndex((item) => { return item.src == photo.src } );
    if (picnum > 0) {
      let prev_photo = this.photos[picnum-1]
      this.open(prev_photo)
    }
  }

  handleArrows(key:string, photo:any) {
    if (key=="ArrowLeft") {
      this.prev(photo)
    }
    if (key=="ArrowRight") {
      this.next(photo)
    }
  }

  ngOnInit() {
  }

}
