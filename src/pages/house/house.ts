import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'page-list',
  templateUrl: 'house.html',
  providers: [AuthService]
})

export class HousePage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, member: string, avatar: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.items = [
      {
        title: 'House Stark - The North',
        member: 'Sansa Stark',
        avatar: 'https://res.cloudinary.com/unicodeveloper/image/upload/v1501828956/sansastark.jpg'
      },
      {
        title: 'House Lannister - The Westerlands',
        member: 'Tyrion Lannister',
        avatar: 'https://res.cloudinary.com/unicodeveloper/image/upload/v1501828923/tyrionlannister.jpg'
      },
      {
        title: 'House Baratheon - The Stormlands',
        member: 'Stannis Baratheon',
        avatar: 'https://res.cloudinary.com/unicodeveloper/image/upload/v1501828950/stannisbaratheon.png'
      },
      {
        title: 'House Greyjoy - The Iron Islands',
        member: 'Balon Greyjoy',
        avatar: 'https://res.cloudinary.com/unicodeveloper/image/upload/v1501828911/balongreyjoy.jpg'
      },
      {
        title: 'House Targaryen - The Crownlands',
        member: 'Daenerys Targaryen',
        avatar: 'https://res.cloudinary.com/unicodeveloper/image/upload/v1501828803/danerystargaryen.jpg'
      },
      {
        title: 'House Tyrell - The Reach',
        member: 'Mace Tyrell',
        avatar: 'https://res.cloudinary.com/unicodeveloper/image/upload/v1501828797/macetyrrell.jpg'
      },
      {
        title: 'House Martell - The Dorne',
        member: 'Doran Martell',
        avatar: 'https://res.cloudinary.com/unicodeveloper/image/upload/v1501828795/doranmartell.jpg'
      }
    ];
  }
}
