import { Component, OnInit } from '@angular/core';
import { Directory, Filesystem } from '@capacitor/filesystem';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  data = '';

  ngOnInit(): void {
    setInterval(() => {
      Filesystem.readFile({
        path: 'test.txt',
        directory: Directory.Data,
      }).then(({ data }) => {
        this.data = data;
      });
    }, 1000);
  }
}
