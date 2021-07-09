import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { JsonData } from 'src/data';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  constructor() {}

  getItemBySlag(slag: string): any {
    const data = this.articleJson.filter((element) => element.slug == slag);
    console.log(data);
    return data;
  }

  getAuthorByUsername(username: string): any {
    const data = this.articleJson.filter(
      (element) => element.author.username == username
    );
    console.log(data);
    return data;
  }

  getItemByTag(tag: string): any {
    const data = this.articleJson.filter((element) =>
      element.tagList.includes(tag)
    );
    console.log(data);
    return data;
  }

  getArticleList() {
    return this.articleJson;
  }

  getTagList() {
    return this.tagList;
  }

  private LoggedIn: boolean = false;

  userNav = new Subject();

  getLoggedIn = () => this.LoggedIn;
  // setLoggedIn = (newVal: boolean) => (this.LoggedIn = newVal);

  setLoggedIn(newVal: boolean) {
    this.LoggedIn = newVal;
  }

  articleJson: Array<JsonData> = [
    {
      title: 'New article',
      slug: 'new-article-qgx2pm',
      body: 'some text',
      createdAt: '2021-06-27T08:36:24.062Z',
      updatedAt: '2021-06-27T08:36:24.062Z',
      tagList: [],
      description: 'about something',
      author: {
        username: 'jaol',
        bio: null,
        image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
        following: false,
      },
      favorited: true,
      favoritesCount: 3,
    },
    {
      title: 'New article',
      slug: 'new-article-age711',
      body: 'some text',
      createdAt: '2021-06-27T08:36:09.624Z',
      updatedAt: '2021-06-27T08:36:09.624Z',
      tagList: [],
      description: 'about something',
      author: {
        username: 'jaol',
        bio: null,
        image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
        following: false,
      },
      favorited: false,
      favoritesCount: 0,
    },
    {
      title: 'Shakespeare Sonnet',
      slug: 'shakespeare-sonnet-ctwqxi',
      body: "When I do count the clock that tells the time,\n\nAnd see the brave day sunk in hideous night;\n\nWhen I behold the violet past prime,\n\nAnd sable curls all silver'd o'er with white；",
      createdAt: '2021-06-27T08:31:08.035Z',
      updatedAt: '2021-06-27T08:31:08.035Z',
      tagList: [],
      description: 'When I do count the clock that tells the time,',
      author: {
        username: 'Luna',
        bio: null,
        image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
        following: false,
      },
      favorited: false,
      favoritesCount: 0,
    },
    {
      title: 'aut aperiam perspiciatis',
      slug: 'aut-aperiam-perspiciatis-y7ai77',
      body: 'Harum accusantium quasi. Voluptate officia sed veniam ducimus nihil. Non aliquid impedit ut qui et. Officia dicta recusandae. At vitae velit illo ducimus minus.',
      createdAt: '2021-06-27T08:25:51.438Z',
      updatedAt: '2021-06-27T08:25:51.438Z',
      tagList: [],
      description: 'Illum exercitationem laboriosam reiciendis nostrum.',
      author: {
        username: 'eugene_13',
        bio: null,
        image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
        following: false,
      },
      favorited: false,
      favoritesCount: 1,
    },
    {
      title: 'eos eos nesciunt',
      slug: 'eos-eos-nesciunt-k50hx3',
      body: 'Voluptas accusamus molestiae nihil rerum quasi. Veritatis fuga ullam voluptate voluptas id magnam sunt. Fuga et eos enim est.',
      createdAt: '2021-06-27T08:25:47.526Z',
      updatedAt: '2021-06-27T08:25:47.526Z',
      tagList: [],
      description: 'Quae facere maxime id et eum.',
      author: {
        username: 'eugene_13',
        bio: null,
        image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
        following: false,
      },
      favorited: false,
      favoritesCount: 0,
    },
    {
      title: 'ut dolore eos',
      slug: 'ut-dolore-eos-6cs0nf',
      body: 'Excepturi laudantium magni commodi. Esse quaerat molestiae saepe. Omnis est dicta nisi sit quidem.',
      createdAt: '2021-06-27T08:19:22.673Z',
      updatedAt: '2021-06-27T08:19:22.673Z',
      tagList: [],
      description:
        'Laboriosam asperiores expedita adipisci aut omnis molestiae laborum.',
      author: {
        username: 'eugene_13',
        bio: null,
        image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
        following: false,
      },
      favorited: false,
      favoritesCount: 0,
    },
    {
      title: 'accusamus qui qui',
      slug: 'accusamus-qui-qui-rum4i7',
      body: 'Corrupti excepturi impedit id fugit eum. Ex commodi deleniti non ut placeat voluptas distinctio. Aut unde veritatis magni nihil. Voluptas enim excepturi ut error non non rerum at et.',
      createdAt: '2021-06-27T08:17:50.380Z',
      updatedAt: '2021-06-27T08:17:50.380Z',
      tagList: [],
      description: 'Vero consectetur quia culpa doloremque.',
      author: {
        username: 'eugene_13',
        bio: null,
        image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
        following: false,
      },
      favorited: false,
      favoritesCount: 0,
    },
    {
      title: 'qui quo voluptatem',
      slug: 'qui-quo-voluptatem-3t0vdn',
      body: 'Corrupti qui et. Laudantium voluptatum corporis expedita. Quibusdam illo accusantium aspernatur ad ab ipsam eius enim velit. Veritatis occaecati ipsam nobis modi minima vitae at ea minima. Sint iure ut.',
      createdAt: '2021-06-27T08:17:46.793Z',
      updatedAt: '2021-06-27T08:17:46.793Z',
      tagList: [],
      description: 'Et quidem sint quibusdam iste.',
      author: {
        username: 'eugene_13',
        bio: null,
        image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
        following: false,
      },
      favorited: false,
      favoritesCount: 0,
    },
    {
      title: 'odio dolorem sit',
      slug: 'odio-dolorem-sit-rtsg3m',
      body: 'Perferendis et illo laboriosam eos. Rerum maxime sunt aut adipisci. Pariatur vel mollitia mollitia. Ut est quaerat assumenda quo animi aliquid.',
      createdAt: '2021-06-27T08:17:44.441Z',
      updatedAt: '2021-06-27T08:17:44.441Z',
      tagList: [],
      description: 'Eius soluta voluptas vitae autem distinctio.',
      author: {
        username: 'eugene_13',
        bio: null,
        image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
        following: false,
      },
      favorited: false,
      favoritesCount: 0,
    },
    {
      title: 'aperiam dicta eligendi',
      slug: 'aperiam-dicta-eligendi-mmvlq1',
      body: 'Ad labore et enim nihil ducimus et exercitationem magni. Nobis sunt animi necessitatibus exercitationem quis. Praesentium ut molestiae quo quae unde dolorem odio officia repudiandae. Inventore soluta deserunt modi voluptates temporibus quibusdam dicta repellat.',
      createdAt: '2021-06-27T08:17:40.954Z',
      updatedAt: '2021-06-27T08:17:40.954Z',
      tagList: [],
      description: 'Sed esse eveniet dolor magni impedit aut eum dicta sint.',
      author: {
        username: 'eugene_13',
        bio: null,
        image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
        following: false,
      },
      favorited: false,
      favoritesCount: 0,
    },
    {
      title: 'dolorum officiis et',
      slug: 'dolorum-officiis-et-w2n1d9',
      body: 'Deleniti omnis vero in non quaerat maiores. Non consequatur neque voluptates id et. Dolor quas quas.',
      createdAt: '2021-06-27T08:05:02.288Z',
      updatedAt: '2021-06-27T08:05:02.288Z',
      tagList: [],
      description: 'Aliquam ipsum et quo rem et impedit facere eligendi.',
      author: {
        username: 'eugene_13',
        bio: null,
        image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
        following: false,
      },
      favorited: false,
      favoritesCount: 0,
    },
    {
      title: 'sed consequatur repellendus',
      slug: 'sed-consequatur-repellendus-sn1sme',
      body: 'Quisquam blanditiis architecto deserunt accusamus itaque ullam corporis quod sint. Esse et unde quam aut commodi natus et. Perferendis porro officia quas.',
      createdAt: '2021-06-27T08:04:59.829Z',
      updatedAt: '2021-06-27T08:04:59.829Z',
      tagList: [],
      description: 'Aut omnis recusandae ab est qui.',
      author: {
        username: 'eugene_13',
        bio: null,
        image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
        following: false,
      },
      favorited: false,
      favoritesCount: 0,
    },
    {
      title: 'et deleniti esse',
      slug: 'et-deleniti-esse-pet0rr',
      body: 'Quis iste ad et et. Assumenda dignissimos ab. Eaque id non.',
      createdAt: '2021-06-27T08:04:56.250Z',
      updatedAt: '2021-06-27T08:04:56.250Z',
      tagList: [],
      description: 'Quis aut voluptas error nostrum.',
      author: {
        username: 'eugene_13',
        bio: null,
        image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
        following: false,
      },
      favorited: false,
      favoritesCount: 0,
    },
    {
      title: 'nobis ut suscipit',
      slug: 'nobis-ut-suscipit-bxlyf9',
      body: 'Reprehenderit fugit eaque iure recusandae aut maiores culpa. Dolorem harum et eveniet quasi. Ipsa quis ut. Fugit commodi nihil esse et. Enim quibusdam voluptatem.',
      createdAt: '2021-06-27T07:59:17.872Z',
      updatedAt: '2021-06-27T07:59:17.872Z',
      tagList: [],
      description: 'Repellendus perferendis ad aliquam vitae id quo.',
      author: {
        username: 'eugene_13',
        bio: null,
        image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
        following: false,
      },
      favorited: false,
      favoritesCount: 0,
    },
    {
      title: 'molestias aut et',
      slug: 'molestias-aut-et-ei4atq',
      body: 'Ab tenetur modi magni omnis voluptate. Veniam hic aspernatur perferendis. Qui quidem quis sequi.',
      createdAt: '2021-06-27T07:59:15.125Z',
      updatedAt: '2021-06-27T07:59:15.125Z',
      tagList: [],
      description: 'Sint qui laudantium eos iste rerum.',
      author: {
        username: 'eugene_13',
        bio: null,
        image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
        following: false,
      },
      favorited: false,
      favoritesCount: 0,
    },
    {
      title: 'in nihil est',
      slug: 'in-nihil-est-ctwsbk',
      body: 'Quaerat sint recusandae deleniti. Sunt nihil dolor voluptates. Dignissimos tempore accusantium quia in fugit quasi esse natus. Iusto aliquam accusamus et sed.',
      createdAt: '2021-06-27T07:59:10.741Z',
      updatedAt: '2021-06-27T07:59:10.741Z',
      tagList: [],
      description: 'Facilis at repudiandae officiis quaerat consectetur.',
      author: {
        username: 'eugene_13',
        bio: null,
        image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
        following: false,
      },
      favorited: false,
      favoritesCount: 0,
    },
    {
      title: 'say sth',
      slug: 'say-sth-60av0u',
      body: 'say sth here',
      createdAt: '2021-06-27T07:53:31.951Z',
      updatedAt: '2021-06-27T07:53:31.951Z',
      tagList: ['aha', 'test'],
      description: 'just say sth',
      author: {
        username: 'Luna',
        bio: null,
        image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
        following: false,
      },
      favorited: false,
      favoritesCount: 0,
    },
    {
      title: 'How to train your dragon',
      slug: 'how-to-train-your-dragon-apawmt',
      body: 'You have to believe',
      createdAt: '2021-06-27T07:52:50.254Z',
      updatedAt: '2021-06-27T07:52:50.254Z',
      tagList: [],
      description: 'Ever wonder how?',
      author: {
        username: 'Luna',
        bio: null,
        image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
        following: false,
      },
      favorited: false,
      favoritesCount: 0,
    },
    {
      title: 'I am also here',
      slug: 'i-am-also-here-e1ebjj',
      body: 'hey there',
      createdAt: '2021-06-27T06:32:09.298Z',
      updatedAt: '2021-06-27T06:32:09.298Z',
      tagList: [],
      description: 'me',
      author: {
        username: 'deltalearn6',
        bio: null,
        image:
          'https://cdn4.iconfinder.com/data/icons/green-shopper/1068/user.png',
        following: false,
      },
      favorited: false,
      favoritesCount: 1,
    },
    {
      title: 'dfs',
      slug: 'dfs-sju71e',
      body: 'd',
      createdAt: '2021-06-27T06:09:44.058Z',
      updatedAt: '2021-06-27T06:09:44.058Z',
      tagList: ['ds'],
      description: 'sd',
      author: {
        username: '13151',
        bio: null,
        image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
        following: false,
      },
      favorited: false,
      favoritesCount: 1,
    },
  ];

  tagList: Array<string> = [
    '‌',
    '‌‌',
    '‌‌‌',
    '‌‌‌‌',
    '‌‌‌‌‌‌‌',
    '‌‌‌‌‌',
    '‌‌‌‌‌‌‌‌',
    '‌‌‌‌‌‌‌‌‌‌',
    '‌‌‌‌‌‌‌‌‌‌‌',
    '‌‌‌‌‌‌',
    'HuManIty',
    'Hu‌Man‌Ity',
    'Gandhi',
    'HITLER',
    'SIDA',
    'BlackLivesMatter',
    'Black‌Lives‌Matter',
    'test',
    'dragons',
    'butt',
  ];
}
