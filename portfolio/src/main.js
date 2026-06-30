import './style.css'
import { initHeader } from './components/Header.js'

// 各セクションの初期化関数をインポート
import { initTop } from './pages/Top.js'
import { initProfile } from './pages/Profile.js'
import { initNews } from './pages/News.js'
import { initSkillSet } from './pages/SkillSet.js'
import { initWorks } from './pages/Works.js'
import { initMindSet } from './pages/MindSet.js'
import { initContact } from './pages/Contact.js'

document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');
  if (!app) return;

  // メインコンテナ（<main>）を生成して配置
  const main = document.createElement('main');
  main.className = 'flex-grow';
  app.appendChild(main);

  // 各ページ・セクションの中身をDOMに挿入
  initTop(main);
  initProfile(main);
  initNews(main);
  initSkillSet(main);
  initWorks(main);
  initMindSet(main);
  initContact(main);

  // 共通ヘッダーの挿入
  initHeader();
});