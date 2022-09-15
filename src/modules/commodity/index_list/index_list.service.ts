import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { IResponse } from 'src/interface/response.interface';
import { Op } from 'sequelize';
import { Bar } from './entities/bar.entities';

const logger = new Logger('popular.service');

@Injectable()
export class IndexListService {
  private response: IResponse;
  constructor(
    @InjectModel(Bar) private readonly barModel: typeof Bar, // private readonly userService: UserService,
  ) {}

  /**
   * 查看bar
   * @returns
   */
  async selectBar() {
    return (this.response = {
      code: 0,
      data: {
        tabBarList: [
          {
            id: 1,
            name: '推荐',
          },
          {
            id: 2,
            name: '一级市场',
          },
          {
            id: 3,
            name: '交换作品',
          },
          {
            id: 4,
            name: '盲盒购选',
          },
          {
            id: 5,
            name: '艺术家作品',
          },
          {
            id: 6,
            name: '流拍竞拍',
          },
        ],
        data: [
          {
            type: 'swiperList',
            data: [
              'http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg',
              'http://c.hiphotos.baidu.com/image/pic/item/30adcbef76094b36de8a2fe5a1cc7cd98d109d99.jpg',
              'http://h.hiphotos.baidu.com/image/pic/item/7c1ed21b0ef41bd5f2c2a9e953da81cb39db3d1d.jpg',
              'http://g.hiphotos.baidu.com/image/pic/item/55e736d12f2eb938d5277fd5d0628535e5dd6f4a.jpg',
              'http://e.hiphotos.baidu.com/image/pic/item/4e4a20a4462309f7e41f5cfe760e0cf3d6cad6ee.jpg',
              'http://b.hiphotos.baidu.com/image/pic/item/9d82d158ccbf6c81b94575cfb93eb13533fa40a2.jpg',
              'http://e.hiphotos.baidu.com/image/pic/item/4bed2e738bd4b31c1badd5a685d6277f9e2ff81e.jpg',
              'http://g.hiphotos.baidu.com/image/pic/item/0d338744ebf81a4c87a3add4d52a6059252da61e.jpg',
              'http://a.hiphotos.baidu.com/image/pic/item/f2deb48f8c5494ee5080c8142ff5e0fe99257e19.jpg',
              'http://f.hiphotos.baidu.com/image/pic/item/4034970a304e251f503521f5a586c9177e3e53f9.jpg',
              'http://b.hiphotos.baidu.com/image/pic/item/279759ee3d6d55fbb3586c0168224f4a20a4dd7e.jpg',
              'http://a.hiphotos.baidu.com/image/pic/item/e824b899a9014c087eb617650e7b02087af4f464.jpg',
              'http://c.hiphotos.baidu.com/image/pic/item/9c16fdfaaf51f3de1e296fa390eef01f3b29795a.jpg',
              'http://d.hiphotos.baidu.com/image/pic/item/b58f8c5494eef01f119945cbe2fe9925bc317d2a.jpg',
              'http://h.hiphotos.baidu.com/image/pic/item/902397dda144ad340668b847d4a20cf430ad851e.jpg',
              'http://b.hiphotos.baidu.com/image/pic/item/359b033b5bb5c9ea5c0e3c23d139b6003bf3b374.jpg',
              'http://a.hiphotos.baidu.com/image/pic/item/8d5494eef01f3a292d2472199d25bc315d607c7c.jpg',
              'http://b.hiphotos.baidu.com/image/pic/item/e824b899a9014c08878b2c4c0e7b02087af4f4a3.jpg',
              'http://g.hiphotos.baidu.com/image/pic/item/6d81800a19d8bc3e770bd00d868ba61ea9d345f2.jpg',
            ],
          },
          {
            type: 'recommedList',
            data: [
              {
                bigUrl:
                  'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0C/05/ChMkJ14dLNeIfJBuAAZKuwc_TagAAwWUAJPWVAABkrT442.jpg',
                children: [
                  {
                    url: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0C/05/ChMkJl4dLNWICWDkAAJuLMSELg4AAwWUAIyjRcAAm5E585.jpg',
                  },
                  {
                    url: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0C/05/ChMkJ14dLNyIUDBWAANHiB77LTsAAwWUALyl1gAA0eg629.jpg',
                  },
                  {
                    url: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0C/05/ChMkJl4dNbmIS-1MAAYHKJ-tub0AAwWXACrfHkABgdA472.jpg',
                  },
                ],
              },
              {
                bigUrl:
                  'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/00/07/ChMkJl3qNKaIDNA2AARqqK0FxbEAAvnJAJbLQMABGrA592.jpg',
                children: [
                  {
                    url: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/00/07/ChMkJ13qNJeIcWlLAAXZO1T9wbMAAvnJACT_eMABdlT817.jpg',
                  },
                  {
                    url: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/00/07/ChMkJl3qO7qIUpr0AATXU2iIqowAAvnKwIEVqMABNdr420.jpg',
                  },
                  {
                    url: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/00/07/ChMkJl3qNJ2IFiI6AAOv3s2X_20AAvnJAFb2ZcAA6_2818.jpg',
                  },
                ],
              },
              {
                bigUrl:
                  'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0E/08/ChMkJl3g7o-Ibp4nAAYg0I-lImUAAvfjgFkfbYABiDo544.jpg',
                children: [
                  {
                    url: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0E/08/ChMkJ13g7oWIat4NAANPB0GCZbsAAvfjQN2xtcAA08f105.jpg',
                  },
                  {
                    url: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0E/08/ChMkJl3g7oeIaGWyAAI4GY0ZTs8AAvfjQPPAaQAAjgx971.jpg',
                  },
                  {
                    url: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0E/08/ChMkJl3g7oKIeKcxAAVLWWHqK2QAAvfjQMJ3CUABUtx280.jpg',
                  },
                ],
              },
            ],
          },
          {
            type: 'commoditList',
            data: [
              {
                id: 1,
                title:
                  '海贼王索隆图片海贼王索隆图片海贼王索隆图片海贼王索隆图片海贼王索隆图片海贼王索隆图片',
                url: 'https://img.bizhiku.net/uploads/2022/0809/wcxs5yv2h43.jpg?x-oss-process=style/w_870-h_870',
                pprice: '889',
                oprice: '1089',
                discount: '5.2',
              },
              {
                id: 2,
                title: '海贼王索隆图片',
                url: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0D/09/ChMkJl3c9huIXs89AAR-50HaEV8AAvboAOtTP4ABH7_855.jpg',
                pprice: '589',
                oprice: '989',
                discount: '7.2',
              },
              {
                id: 3,
                title: '海贼王娜美壁纸',
                url: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0D/04/ChMkJ13bqqCISyNJAARuw8uAcSgAAvaWwGxA9IABG7b911.jpg',
                pprice: '889',
                oprice: '1089',
                discount: '5.2',
              },
            ],
          },
        ],
      },
    });
  }

  /**
   * 类型切换
   * @returns
   */
  async find() {
    return (this.response = {
      code: 0,
      data: [
        {
          type: 'bannerList',
          data: 'https://cdn.pixabay.com/photo/2022/01/06/14/41/blockchain-6919617_960_720.jpg',
        },
        {
          type: 'iconsList',
          data: [
            {
              id: 1,
              url: 'https://cdn.pixabay.com/photo/2022/01/17/17/20/bored-6945309_960_720.png',
              name: '头像元素',
            },
            {
              id: 2,
              url: 'https://cdn.pixabay.com/photo/2022/03/23/02/50/skeleton-7086311_960_720.png',
              name: '骷髅元素',
            },
            {
              id: 3,
              url: 'https://cdn.pixabay.com/photo/2021/11/06/14/40/nft-6773494_960_720.png',
              name: '金币元素',
            },
            {
              id: 4,
              url: 'https://cdn.pixabay.com/photo/2022/03/03/20/47/the-simpson-7046041_960_720.jpg',
              name: '朋克元素',
            },
            {
              id: 5,
              url: 'https://cdn.pixabay.com/photo/2022/02/14/02/52/monkey-7012380_960_720.png',
              name: '猴子元素',
            },
            {
              id: 6,
              url: 'https://cdn.pixabay.com/photo/2022/02/23/15/56/technology-7030913_960_720.png',
              name: '元宇宙元素',
            },
            {
              id: 7,
              url: 'https://cdn.pixabay.com/photo/2022/03/08/16/06/nft-7056054_960_720.jpg',
              name: '加冕元素',
            },
            {
              id: 8,
              url: 'https://cdn.pixabay.com/photo/2022/06/27/16/16/eye-7287863_960_720.jpg',
              name: '虚拟元素',
            },
          ],
        },
        {
          type: 'hotList',
          data: [
            {
              id: 1,
              url: 'https://wallpapers.com/images/hd/nft-gold-coin-towers-68fjsdhkeixtkg6k.webp',
              title: '加密头像',
              pprice: '123',
              oprice: '288',
            },
            {
              id: 2,
              url: 'https://wallpapers.com/images/hd/nft-gold-coin-dollar-bill-p5gs44qzpqoih6di.webp',
              title: '加密头像',
              pprice: '123',
              oprice: '288',
            },
            {
              id: 3,
              url: 'https://wallpapers.com/images/hd/nft-gold-coin-towers-68fjsdhkeixtkg6k.webp',
              title: '加密头像',
              pprice: '123',
              oprice: '288',
            },
            {
              id: 4,
              url: 'https://wallpapers.com/images/hd/nft-gold-coin-dollar-bill-p5gs44qzpqoih6di.webp',
              title: '加密头像',
              pprice: '123',
              oprice: '288',
            },
            {
              id: 5,
              url: 'https://wallpapers.com/images/hd/nft-gold-coin-towers-68fjsdhkeixtkg6k.webp',
              title: '加密头像',
              pprice: '123',
              oprice: '288',
            },
            {
              id: 6,
              url: 'https://wallpapers.com/images/hd/nft-gold-coin-dollar-bill-p5gs44qzpqoih6di.webp',
              title: '加密头像',
              pprice: '123',
              oprice: '288',
            },
          ],
        },
        {
          type: 'shopList',
          data: [
            {
              id: 1,
              bigUrl:
                'https://thumb.photo-ac.com/41/41c47245ddfc13f1bedbdf847513da51_w.jpeg',
              title:
                '海贼王索隆图片海贼王索隆图片海贼王索隆图片海贼王索隆图片海贼王索隆图片海贼王索隆图片',
              data: [
                {
                  id: 1,
                  title:
                    '海贼王索隆图片海贼王索隆图片海贼王索隆图片海贼王索隆图片海贼王索隆图片海贼王索隆图片',
                  url: 'https://img.bizhiku.net/uploads/2022/0809/wcxs5yv2h43.jpg?x-oss-process=style/w_870-h_870',
                  pprice: '889',
                  oprice: '1089',
                  discount: '5.2',
                },
                {
                  id: 2,
                  title: '海贼王索隆图片',
                  url: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0D/09/ChMkJl3c9huIXs89AAR-50HaEV8AAvboAOtTP4ABH7_855.jpg',
                  pprice: '589',
                  oprice: '989',
                  discount: '7.2',
                },
                {
                  id: 3,
                  title: '海贼王娜美壁纸',
                  url: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0D/04/ChMkJ13bqqCISyNJAARuw8uAcSgAAvaWwGxA9IABG7b911.jpg',
                  pprice: '889',
                  oprice: '1089',
                  discount: '5.2',
                },
                {
                  id: 4,
                  title: '海贼王娜美壁纸',
                  url: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0D/04/ChMkJ13bqqCISyNJAARuw8uAcSgAAvaWwGxA9IABG7b911.jpg',
                  pprice: '889',
                  oprice: '1089',
                  discount: '5.2',
                },
                {
                  id: 5,
                  title: '海贼王娜美壁纸',
                  url: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0D/04/ChMkJ13bqqCISyNJAARuw8uAcSgAAvaWwGxA9IABG7b911.jpg',
                  pprice: '889',
                  oprice: '1089',
                  discount: '5.2',
                },
              ],
            },
            {
              id: 2,
              bigUrl:
                'https://thumb.photo-ac.com/41/41c47245ddfc13f1bedbdf847513da51_w.jpeg',
              title:
                '海贼王索隆图片海贼王索隆图片海贼王索隆图片海贼王索隆图片海贼王索隆图片海贼王索隆图片',
              data: [
                {
                  id: 1,
                  title:
                    '海贼王索隆图片海贼王索隆图片海贼王索隆图片海贼王索隆图片海贼王索隆图片海贼王索隆图片',
                  url: 'https://img.bizhiku.net/uploads/2022/0809/wcxs5yv2h43.jpg?x-oss-process=style/w_870-h_870',
                  pprice: '889',
                  oprice: '1089',
                  discount: '5.2',
                },
                {
                  id: 2,
                  title: '海贼王索隆图片',
                  url: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0D/09/ChMkJl3c9huIXs89AAR-50HaEV8AAvboAOtTP4ABH7_855.jpg',
                  pprice: '589',
                  oprice: '989',
                  discount: '7.2',
                },
                {
                  id: 3,
                  title: '海贼王娜美壁纸',
                  url: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0D/04/ChMkJ13bqqCISyNJAARuw8uAcSgAAvaWwGxA9IABG7b911.jpg',
                  pprice: '889',
                  oprice: '1089',
                  discount: '5.2',
                },
                {
                  id: 4,
                  title: '海贼王娜美壁纸',
                  url: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0D/04/ChMkJ13bqqCISyNJAARuw8uAcSgAAvaWwGxA9IABG7b911.jpg',
                  pprice: '889',
                  oprice: '1089',
                  discount: '5.2',
                },
                {
                  id: 5,
                  title: '海贼王娜美壁纸',
                  url: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0D/04/ChMkJ13bqqCISyNJAARuw8uAcSgAAvaWwGxA9IABG7b911.jpg',
                  pprice: '889',
                  oprice: '1089',
                  discount: '5.2',
                },
              ],
            },
          ],
        },
        {
          type: 'commoditList1',
          data: [
            {
              id: 1,
              title:
                '海贼王索隆图片海贼王索隆图片海贼王索隆图片海贼王索隆图片海贼王索隆图片海贼王索隆图片',
              url: 'https://img.bizhiku.net/uploads/2022/0809/wcxs5yv2h43.jpg?x-oss-process=style/w_870-h_870',
              pprice: '889',
              oprice: '1089',
              discount: '5.2',
            },
            {
              id: 2,
              title: '海贼王索隆图片',
              url: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0D/09/ChMkJl3c9huIXs89AAR-50HaEV8AAvboAOtTP4ABH7_855.jpg',
              pprice: '589',
              oprice: '989',
              discount: '7.2',
            },
            {
              id: 3,
              title: '海贼王娜美壁纸',
              url: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0D/04/ChMkJ13bqqCISyNJAARuw8uAcSgAAvaWwGxA9IABG7b911.jpg',
              pprice: '889',
              oprice: '1089',
              discount: '5.2',
            },
          ],
        },
      ],
    });
  }
}
