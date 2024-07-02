import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pages-test';

  @ViewChild('audio', { static: true }) bgAudio!: ElementRef<HTMLAudioElement>;

  public play(): void {
    const audio = this.bgAudio.nativeElement;
    audio.play();
  }
}
