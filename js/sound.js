function PlaySound(sound, level) {
  console.log('this is running');
  var path = "audio/";
  var snd = new Audio(path + sound + ".mp3");
  snd.play();
}
