export const skillCategories = [
    {
        id: 'programming',
        name: 'プログラミング言語',
        icon: '💻',
        skills: [
            {
                name: 'C',
                icon: `${import.meta.env.BASE_URL}img/icon/c.png`,
                level: 4,
                description: '授業やゲーム制作を通して、C言語によるプログラミングを学んでいます。'
            },
            {
                name: 'C#',
                icon: `${import.meta.env.BASE_URL}img/icon/csharp.png`,
                level: 5,
                description: 'Unityでのゲーム制作を中心に、C#を使用した開発を行っています。'
            },
            {
                name: 'Java',
                icon: `${import.meta.env.BASE_URL}img/icon/java.png`,
                level: 3,
                description: '授業でのプログラミングを通して、Javaの基礎を学んでいます。'
            },
            {
                name: 'HTML',
                icon: `${import.meta.env.BASE_URL}img/icon/c.png`,
                level: 4,
                description: 'ポートフォリオサイトなどのWebページ制作に使用しています。'
            },
            {
                name: 'CSS',
                icon: `${import.meta.env.BASE_URL}img/icon/c.png`,
                level: 4,
                description: 'Tailwind CSSなどを使用してWebページのデザインを制作しています。'
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
                level: 5,
                description: 'ゲーム制作サークルでのチーム開発を中心に使用しています。'
            },
            {
                name: 'Blender',
                icon: `${import.meta.env.BASE_URL}img/icon/blender.png`,
                level: 3,
                description: 'ゲーム制作に必要な3Dモデルや素材の制作に使用しています。'
            },
            {
                name: 'Scratch',
                icon: `${import.meta.env.BASE_URL}img/icon/unity.png`,
                level: 3,
                description: 'ゲーム制作を通してプログラミングの基礎を学びました。'
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
                name: 'Visual Studio',
                icon: `${import.meta.env.BASE_URL}img/icon/visualstudio.png`,
                level: 3,
                description: 'C/C++などのプログラム開発に使用しています。'
            },
            {
                name: 'VS Code',
                icon: `${import.meta.env.BASE_URL}img/icon/vscode.png`,
                level: 4,
                description: 'Webサイト制作やJavaScriptなどの開発に使用しています。'
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
                description: 'チーム開発やポートフォリオのソースコード管理に使用しています。'
            },
            {
                name: 'Notion',
                icon: `${import.meta.env.BASE_URL}img/icon/notion.png`,
                level: 3,
                description: '制作物の情報整理やタスク管理などに使用しています。'
            }
        ]
    }
];