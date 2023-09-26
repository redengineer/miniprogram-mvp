Page({
  onShareAppMessage() {
    return {
      title: 'Audio',
      path: 'packageAPI/pages/audio/audio',
    };
  },
  onReady(e) {
    // 使用 xhs?.createAudioContext 获取 audio 上下文 context
    this.audioCtx = xhs?.createAudioContext('myAudio');
    this.audioCtx.setSrc('https://dldir1.qq.com/music/release/upload/t_mm_file_publish/2339610.m4a');
    this.audioCtx.play();
  },
  data: {
    src: '',
  },
  audioPlay() {
    this.audioCtx.play();
  },
  audioPause() {
    this.audioCtx.pause();
  },
  audio14() {
    this.audioCtx.seek(14);
  },
  audioStart() {
    this.audioCtx.seek(0);
  },
});
