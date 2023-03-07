import { Header } from './components/Header';
import { Post, IPost } from './components/Post';
import { Sidebar } from './components/Sidebar';
import styles from './App.module.css';
import './global.css';

const posts: IPost[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars2.githubusercontent.com/u/126234',
      name: 'Jean Borges',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },

      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz   no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare',
      },
    ],
    publishedAt: new Date('2023-03-06 13:53:28'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars2.githubusercontent.com/u/23425',
      name: 'Jean',
      role: 'author',
    },
    content: [
      { type: 'paragraph', content: 'Publicação teste' },

      {
        type: 'paragraph',
        content: 'Testando a publicação de um projeto no meu portifa.',
      },
      {
        type: 'link ',
        content: 'https://github.com/jeanb762',
      },
    ],
    publishedAt: new Date('2023-03-06 17:00:00'),
  },
];

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </main>
      </div>
    </>
  );
}

export default App;
