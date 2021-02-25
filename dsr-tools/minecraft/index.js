const imageArr = [];
let i = 1;
while (i <= 5) {
  imageArr.push(`banner0${i++}.jpg`);
}

module.exports = {
  slides: imageArr,
  versions: [
    'v1.16.5.210131',
    'v1.16.3.200924',
    'v1.16.2.200906',
    'v1.15.1.200103',
    'v1.14.4.191223',
    'v1.13.2.181112',
    'v1.12.2.180803',
    'v1.12.2.180704',
    'v1.12.2.180625',
    'v1.12.2.180216',
    'v1.12.2.171101',
    'v1.11.170102',
    'v1.10.1.160912',
    'v1.10.160703',
    'v1.9.2.160701',
    'v1.7.10.160701',
    'v1.7.10.160625',
    'v1.8.2.150220',
    'v1.8.150113',
    'v1.8.141110',
    'v1.7.10.140912',
    'v1.7.10.140817',
    'v1.7.10.140710',
    'v1.7.2.140710',
    'v1.7.10.140630',
    'v1.7.2.131205',
    'v1.6.4.131205',
    'v1.7.2.131111',
    'v1.6.4.131111',
    'v1.7.2.131025',
    'v1.6.4.131025',
  ],
  modList: [
    {
      name: 'Custom Skin Loader',
      desc: '自定义皮肤读取',
    },
    {
      name: 'Hwyla',
      desc: '信息高亮显示',
    },
    {
      name: 'Inventory Profiles',
      desc: 'R 键整理',
    },
    {
      name: 'Optifine',
      desc: '高清修复',
    },
    {
      name: 'Roughly Enough Items',
      desc: 'REI 合成表',
    },
    {
      name: 'Voxel Map',
      desc: '小地图与世界地图',
    },
  ],
  downloads: [
    {
      name: '完整版',
      link:
        'https://kafuu.coding.net/public/dsr-archive/dsr-archive-a/git/files/master/minecraft/MC_DSR_1.16.5.210131.7z',
      code: '382M',
    },
    {
      name: '精简版',
      link:
        'https://kafuu.coding.net/public/dsr-archive/dsr-archive-a/git/files/master/minecraft/MC_DSR_1.16.5.210131_Lite.7z',
      code: '74M',
    },
  ],
  alert: '进入游戏前请先根据 README 提示安装 Java 11 LTS 代替陈旧的 Java 8',
};