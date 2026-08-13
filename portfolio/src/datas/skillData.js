export const skillCategories = [
    {
        id: 'programming',
        name: 'プログラミング言語',
        icon: '💻',
        skills: [
            {
                name: 'C#(Unity)',
                icon: `${import.meta.env.BASE_URL}img/icon/csharp.png`,
                level: 4,
                description: 'Unityでのゲーム制作に使用しています。'
            },
            {
                name: 'Java',
                icon: `${import.meta.env.BASE_URL}img/icon/java.png`,
                level: 3,
                description: '授業でのプログラミングを通して、Javaの基礎を学んでいます。'
            },
            {
                name: 'HTML',
                icon: `${import.meta.env.BASE_URL}img/icon/html.png`,
                level: 2,
                description: 'ポートフォリオサイトなどのWebページ制作に使用しています。'
            },
            {
                name: 'CSS',
                icon: `${import.meta.env.BASE_URL}img/icon/css.png`,
                level: 2,
                description: 'Tailwind CSSなどを使用してWebページのデザインを制作しています。'
            },
            {
                name: 'C',
                icon: `${import.meta.env.BASE_URL}img/icon/c.png`,
                level: 1,
                description: '授業でのC言語の学習を通して、プログラミングを基礎を学んでいます。'
            },
            {
                name: 'JavaScript',
                icon: `${import.meta.env.BASE_URL}img/icon/javascript.png`,
                level: 1,
                description: 'Webページのインタラクティブな機能を実装するために使用しています。'
            }
        ]
    },

    {
        id: 'tools',
        name: '開発ツール',
        icon: '🛠️',
        skills: [
            {
                name: 'Unity',
                icon: `${import.meta.env.BASE_URL}img/icon/unity.png`,
                level: 4,
                description: 'ゲーム制作サークルでのチーム開発を中心に使用しています。'
            },
            {
                name: 'ibis Paint',
                icon: `${import.meta.env.BASE_URL}img/icon/ibispaint.png`,
                level: 4,
                description: 'イラスト制作や画像処理に使用しています。'
            },
            {
                name: 'Blender',
                icon: `${import.meta.env.BASE_URL}img/icon/blender.png`,
                level: 2,
                description: 'ゲーム制作に必要な3Dモデルや素材の制作に使用しています。'
            }
        ]
    },

    {
        id: 'environment',
        name: 'IDE',
        icon: '🖋️',
        skills: [
            {
                name: 'Rider',
                icon: `${import.meta.env.BASE_URL}img/icon/rider.png`,
                level: 4,
                description: 'Unityでのゲーム開発を中心に使用しています。'
            },
            {
                name: 'VS Code',
                icon: `${import.meta.env.BASE_URL}img/icon/vscode.png`,
                level: 3,
                description: 'JavaやJavaScriptなどを用いた開発に使用しています。'
            },
            {
                name: 'Visual Studio',
                icon: `${import.meta.env.BASE_URL}img/icon/visualstudio.png`,
                level: 2,
                description: 'C/C++などのプログラム開発に使用しています。'
            },
            {
                name: 'XCode',
                icon: `${import.meta.env.BASE_URL}img/icon/xcode.png`,
                level: 1,
                description: 'Siv3Dを用いたプログラム開発に使用しています。'
            }
        ]
    },

    {
        id: 'management',
        name: '管理ツール',
        icon: '⚙️',
        skills: [
            {
                name: 'GitHub',
                icon: `${import.meta.env.BASE_URL}img/icon/github.png`,
                level: 4,
                description: 'チーム開発でのバージョン管理やポートフォリオのソースコード管理に使用しています。'
            },
            {
                name: 'Notion',
                icon: `${import.meta.env.BASE_URL}img/icon/notion.png`,
                level: 3,
                description: '制作物の情報整理やタスク管理などに使用しています。'
            },
            {
                name: 'HackMD',
                icon: `${import.meta.env.BASE_URL}img/icon/hackmd.png`,
                level: 3,
                description: 'チーム開発での情報整理などに使用しています。'
            }
        ]
    }
];