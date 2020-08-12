function PlaySound(sound) {
  console.log('this is running');
  var path = "../audio/";
  var snd = new Audio(path + sound + ".mp3");
  snd.status = 'dix';
  console.log(sound.status);
  snd.play();
}
