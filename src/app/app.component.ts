import { Component, OnInit } from '@angular/core';
import { Directory, Filesystem } from '@capacitor/filesystem';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  async ngOnInit() {
    try {
      await Filesystem.stat({
        path: 'test.txt',
        directory: Directory.Data,
      });
    } catch (error) {
      await Filesystem.writeFile({
        path: 'test.txt',
        directory: Directory.Data,
        data: '',
      });
    }
    try {
      await Filesystem.appendFile({
        path: 'test.txt',
        directory: Directory.Data,
        data: 'First\n',
      });
      await Filesystem.appendFile({
        path: 'test.txt',
        directory: Directory.Data,
        data: 'Next\n',
      });
    } catch (error) {
      console.error(error);
    }
  }
}
