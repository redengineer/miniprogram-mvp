Page({
  onShareAppMessage() {
    return {
      title: 'map',
      path: 'page/component/pages/map/map',
    };
  },

  data: {
    latitude: 31.215815,
    longitude: 121.474845,
    markers: [
      {
        latitude: 23.099994,
        longitude: 113.32452,
        name: 'T.I.T 创意园',
        id: '1',
        callout: {
          content: 'ALWAYS callout',
          color: 'red',
        },
      },
      {
        id: '2',
        latitude: 23.099,
        longitude: 113.324,
        name: 'BYCLICK callout',
        callout: {
          content: 'BYCLICK',
          color: 'red',
        },
      },
    ],
    covers: [
      {
        latitude: 23.099994,
        longitude: 113.34452,
        iconPath: '/image/location.png',
      },
      {
        latitude: 23.099994,
        longitude: 113.30452,
        iconPath: '/image/location.png',
      },
    ],
    polygons: [
      {
        points: [
          {
            latitude: 23.099994,
            longitude: 113.32452,
          },
          {
            latitude: 23.098994,
            longitude: 113.32352,
          },
          {
            latitude: 23.098994,
            longitude: 113.32552,
          },
        ],
        strokeWidth: 3,
        strokeColor: '#FFFFFFAA',
      },
    ],
    subKey: 'B5QBZ-7JTLU-DSSVA-2BRJ3-TNXLF-2TBR7',
    enable3d: false,
    showCompass: false,
    enableOverlooking: false,
    enableZoom: true,
    enableScroll: true,
    enableRotate: false,
    drawPolygon: false,
    enableSatellite: false,
    enableTraffic: false,
  },
  toggle3d() {
    this.setData({
      enable3d: !this.data.enable3d,
    });
  },
  toggleShowCompass() {
    this.setData({
      showCompass: !this.data.showCompass,
    });
  },
  toggleOverlooking() {
    this.setData({
      enableOverlooking: !this.data.enableOverlooking,
    });
  },
  toggleZoom() {
    this.setData({
      enableZoom: !this.data.enableZoom,
    });
  },
  toggleScroll() {
    this.setData({
      enableScroll: !this.data.enableScroll,
    });
  },
  toggleRotate() {
    this.setData({
      enableRotate: !this.data.enableRotate,
    });
  },
  togglePolygon() {
    this.setData({
      drawPolygon: !this.data.drawPolygon,
    });
  },
  toggleSatellite() {
    this.setData({
      enableSatellite: !this.data.enableSatellite,
    });
  },
  toggleTraffic() {
    this.setData({
      enableTraffic: !this.data.enableTraffic,
    });
  },
  onReady() {
    setTimeout(() => {
      this.mapContext = xhs?.createMapContext('mapId');
      this.mapContext?.getScale({
        success: console.log,
      });
      this.mapContext?.getRegion({
        success: console.log,
        fail: console.error,
      });
      this.mapContext?.includePoints({
        success: console.log,
        fail: console.error,
      });
    }, 5000);
  },
  bindtap(e) {
    console.log('bindtap ===>', e);
  },
  bindmarkertap(e) {
    console.log('bindmarkertap ==>', e);
  },
  bindcallouttap(e) {
    console.log('bindcallouttap ==>', e);
  },
  bindlabeltap(e) {
    console.log('bindlabeltap ===>', e);
  },
});
