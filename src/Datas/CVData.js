export const CVData = {
    personalData: {
        name: 'Cemal Can Yıldırım',
        title: 'Mid Game Developer',
        contacts: [
            { type: 'email', value: 'cemalcan_yildirim10@hotmail.com' },
            { type: 'location', value: 'Turkey' },
            { type: 'linkedin', value: 'linkedin.com/in/cemalcanyildirim/' },
            { type: 'github', value: 'github.com/cemcois1' }
        ]
    },
    sections: [
        {
            type: 'text',
            title: 'Career Profile',
            content: 'Hi I am Cemal. I love making games.',
            icon: 'usertie'
        },
        {
            type: 'common-list',
            title: 'Education',
            icon: 'graduation',
            items: [
                {
                    title: 'Computer Engineering (BS)',
                    authority: 'University',
                    authorityWebSite: 'https://trakya.edu.tr',
                    rightSide: '2018 - present'
                },
            ]
        },
        {
            type: 'experiences-list',
            title: 'Experiences',
            description: 'Optional',
            icon: 'archive',
            items: [
                {
                    title: 'Intern Game Developer',
                    company: 'Trakya TeknoGamehub',
                    companyWebSite: 'https://www.linkedin.com/company/hobi-games/',
                    companyMeta: '',
                    datesBetween: '2017.10 - Present',
                    descriptionTags: ['Unity', 'C#']
                },
                {
                    title: 'Junior Game Developer',
                    company: 'Hobi Games',
                    companyWebSite: 'https://www.linkedin.com/company/hobi-games/',
                    companyMeta: '',
                    datesBetween: '2017.10 - Present',
                    descriptionTags: ['Unity', 'C#']
                },
            ]
        },
        {
            type: 'projects-list',
            title: 'Projects',
            description: 'Optional',
            icon: 'tasks',
            groups: [
                {
                    sectionHeader: 'Company Name',
                    description: 'Optional',
                    items: [
                        { title: 'Misshapen', projectUrl: 'https://play.google.com/store/apps/details?id=com.cosmos.Misshapen', description: 'My first game in the game industry' },
                        { title: 'Age of Runner', projectUrl: 'https://play.google.com/store/apps/details?id=com.MandalinaStudio.AgeofRunner', description: 'My first self published game ' },
                        { title: 'Miner Rush 3D', projectUrl: 'https://play.google.com/store/apps/details?id=com.Mandalina.MinerRush3D' }
                    ]
                }
            ]
        },
        {
            type: 'common-list',
            title: 'Conferences & Certificates',
            description: '',
            icon: 'comments',
            items: [
                {
                    title: 'Hyper Games Conference',
                    authority: 'Game Developer',
                    authorityWebSite: 'https://hgconf.com/'
                },
                {
                    title: 'Kodluyoruz Mobile Game Bootcamp',
                    authorityWebSite: 'https://www.kodluyoruz.org/',
                },
            ]
        },
        {
            type: 'common-list',
            title: 'Languages',
            icon: 'language',
            items: [
                {
                    authority: 'English',
                    authorityMeta: 'B1'
                }
            ]
        },
        {
            type: 'tag-list',
            title: 'Skills Proficiency',
            icon: 'rocket',
            items: ['React', 'Javascript', 'CSS', 'Java', 'C#','C', 'Unity']
        },
        {
            type: 'tag-list',
            title: 'Hobbies & Interests',
            icon: 'cubes',
            items: ['Playing games', 'Clarinet']
        }
    ]
}