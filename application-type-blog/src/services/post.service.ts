export class PostService
{
    posts =
    [
      {
      id: 1,
      title: 'Mon premier post',
  // tslint:disable-next-line: max-line-length
      content: 'Sin autem ad adulescentiam perduxissent, dirimi tamen interdum contentione vel uxoriae condicionis vel commodi alicuius, quod idem adipisci uterque non posset.',
      loveIts: 2,
      created_at: new Date()
      },
      {
        id: 2,
        title: 'Mon deuxième post',
    // tslint:disable-next-line: max-line-length
        content: 'Sin autem ad adulescentiam perduxissent, dirimi tamen interdum contentione vel uxoriae condicionis vel commodi alicuius, quod idem adipisci uterque non posset.',
        loveIts: 0,
        created_at: ''
        },
        {
          id: 3,
          title: 'Mon troisième post',
      // tslint:disable-next-line: max-line-length
          content: 'Sin autem ad adulescentiam perduxissent, dirimi tamen interdum contentione vel uxoriae condicionis vel commodi alicuius, quod idem adipisci uterque non posset.',
          loveIts: 0,
          created_at: ''
          },
          {
            id: 4,
            title: 'Encore un post',
        // tslint:disable-next-line: max-line-length
            content: 'Sin autem ad adulescentiam perduxissent, dirimi tamen interdum contentione vel uxoriae condicionis vel commodi alicuius, quod idem adipisci uterque non posset.',
            loveIts: 0,
            created_at: ''
            }
    ];
    LoveIt(index: number) {
      this.posts[index].loveIts += 1;
    }
    DontLoveIt(index: number) {
      this.posts[index].loveIts -= 1;
    }
}