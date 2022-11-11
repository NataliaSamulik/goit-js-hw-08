import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});



player.on('timeupdate', throttle((function (data) {
   duration: 61.857
    percent: 0.049
    seconds: 3.034
  
      localStorage.setItem('videoplayer-current-time', JSON.stringify(data.seconds))

}), 1000));

player.setCurrentTime(30.456).then(function(seconds) {
    player.setCurrentTime(Number(JSON.parse(localStorage.getItem('videoplayer-current-time'))))
})

