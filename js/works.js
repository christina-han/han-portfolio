const works = [
    {
        id: 1,
        title: 'Personnel Consultant',
        skills: ["Vue", "Vue Router", "VueX", "Javascript"],
        about: 'Consultant platform—a dedicated website where consultants can engage in direct conversations with their bound customers through integrated Line chat rooms. This platform serves as a hub for promoting exceptional products, extending invitations to exciting events, gathering sales feedback, managing inventory, and delivering personalized interactions. Moreover, brands can maintain seamless control and unify their management efforts within this comprehensive platform.',
        additional: ['Data-Driven Strategies', 'Personalized Customer Interaction', 'Targeted Marketing','Streamlined Brand Management'],
        function: ['Vue Router', 'Reusable Components', 'Webpack', 'Chat Room'],
        detail: 'images/works/web_personnel_consultant.png'
    },
    {
        id: 2,
        title: 'Exchange Present',
        skills: ["Vue", "Javascript", "Css Animation"],
        about: "Create a mobile game that aligns with the brand image, offering a user-friendly and visually appealing experience. Integrate the brand's unique characteristics into the game's content, providing engaging challenges and interactive elements that allow players to enjoy the game while experiencing the brand's distinctive style.",
        additional: ['Enhancing Brand Product Connection', 'Growing Member Network'],
        function: ['LINE API', 'CSS Animation', 'Auto Control Video'],
        time: '5 DAYS',
        detail: 'images/works/game_exchange_present.png',
        video: 'images/works/viedo_exchange_present.mp4'
    },
    {
        id: 3,
        title: 'Member Card',
        skills: ["Vue", "Javascript"],
        about: 'Digital membership card that combines multiple brands in one convenient website.Users can access their consumption details and track accumulated loyalty points effortlessly. By using clear colors and icons, users can easily check their membership levels for multiple brands and see how much more they need to spend to upgrade.',
        additional: ['Digital Transformation', 'Data Analysis', 'Market Research', 'Providing Personalized Services'],
        function: ['RESTful API', 'Scss'],
        detail: 'images/works/web_member_card.png'
    },
    {
        id: 4,
        title: 'Backend Activity',
        skills: ["Vue", "Vue Router", "VueX", "Javascript"],
        about: 'Powerful backend system that allows users to create new group-buying campaigns effortlessly. Users can view detailed information about event participants or access statistical data. The visual calendar interface allows users to filter and view participants for the events on a specific day or within a selected month, providing a seamless and convenient experience.',
        additional: ['Efficient Campaign', 'Centralized Management', 'Data Visualization', 'Analyzing The Optimal Event'],
        function: ['RESTful API', 'Visualize Data', 'Customize Calendar', 'Reusable Components'],
        time: '',
        detail: 'images/works/backend_activity.png'
    },
    {
        id: 5,
        title: 'Point Exchange & Invoice',
        skills: ["Vue", "Javascript"],
        about: ' A comprehensive points redemption management platform. The backend allows uploading a list of redeemable rewards, while users can check the shipping status of their redeemed prizes. Website integrate with the government invoice API, enabling easy registration for promotional activities.Streamline processes, enhance customer satisfaction.',
        additional: ['Increased Participation', 'Data Analysis', 'Increased Brand Loyalty', 'Incentivizing Purchases'],
        function: ['QR Scanner', 'Invoice API', 'Control Status', 'Uploadable Prizes'],
        time: '7 DAYS',
        detail: 'images/works/web_point_exchange.png'
    },
    {
        id: 6,
        title: 'Team Up',
        skills: ["Vue", "Javascript", "Adobe Animation"],
        about: "Leverages Line's sharing functionality to invite friends to team up and play a game featuring branded products. During the game, players have the opportunity to earn points that can be used for product redemption or as extra rewards.",
        additional: ['Foster Brand Awareness', 'Community Building', 'Social Interaction', 'Growing Subscriptions'],
        function: ['Adobe Animation', 'LINE API', 'Javascript Control Animation'],
        detail: 'images/works/game_team_game.png',
        video: 'images/works/video_team_game.mp4'
    },
    {
        id: 7,
        title: 'Trial Plan',
        skills: ["Vue", "Vue Router", "VueX", "Javascript"],
        about: "Users who register to participate will receive trial packages regularly, and our system will also remind dedicated consultants to engage with participants periodically.",
        additional: ['Increase Customer Retention Rates', 'Building Relationships', 'Continuous Engagement'],
        function: ['Control Status', 'RESTful API'],
        time: '4 DAYS',
        detail: 'images/works/web_trial_plan.png'
    },
    {
        id: 8,
        title: 'Post Card',
        skills: ["Vue", "Javascript", "Canvas"],
        about: "This web stands out by synthesizing users inputted well-wishes into captivating images. With a simple process, users can transform their heartfelt messages into visually appealing graphics and swiftly share them with loved ones through Line's official account.Elevates users greetings, making them more distinct and enjoyable, serving as the perfect tool to express emotions.",
        additional: ['Social Interaction', 'Lasting Memories', 'Brand Promotion'],
        function: ['Canvas', 'LINE API'],
        detail: 'images/works/web_post.png'
    },
    {
        id: 9,
        title: 'Message Template',
        skills: ["Vue", "Vue Router", "VueX", "Javascript"],
        about: 'Versatile backend system that empowers users to create customized Line message advertisements and promotional messages effortlessly. With this system, you can assemble tailored messages by combining various elements such as colors, buttons, product images, text copies, and hyperlinks. This customization capability enables businesses to craft highly engaging and visually appealing messages that resonate with their target audience.',
        additional: ['effectively Promote Products', 'Measurable Message Result', 'Enhanced Engagement', 'Analyzing Click-Through Rates'],
        function: '',
        detail: 'images/works/backend_message.png'
    },
    {
        id: 10,
        title: 'Point Collection',
        skills: ["Vue", "Javascript"],
        about: 'A task point collection system, allowing users to accumulate points by completing brand-designated missions. Upon successful completion of each task, users will be rewarded with additional bonuses. By clicking on corresponding levels, users can access detailed guidelines for each task, ensuring clear understanding of how to complete them.',
        additional: ['Enhancing Brand Product Connection', 'Incentivizing Purchases'],
        function: ['Control Interface Status', 'Manage Prize Levels"'],
        time: '3 DAYS',
        detail: 'images/works/web_point_collection.png'
    },
    // {
    //     id: 11,
    //     title: 'Todo List',
    //     skills: ["React", "React Router"],
    //     about: 'Feature-rich to-do list application that allows you to easily create a list of tasks for each day. Users can use special markers to differentiate urgent tasks, ,important matters, or personal goals, enabling better management of your daily schedule.',
    //     additional: ['Reminder Functionality', 'Time management', 'Task Tracking & Prioritization'],
    //     function: ['React Router'],
    //     detail: 'images/works/web_point_collection_main.png'
    // },
    {
        id: 11,
        title: 'Ambassador App',
        skills: ["Adobe XD"],
        about: 'Optimized movie locator app that offers a visual way to search for movie showtimes. Before entering the booking process, users can check the availability of remaining seats, ensuring they choose screenings with available seating. Additionally,I redesigned the booking interface to align with the unique style of each movie, enhancing the overall cinematic experience. With this improved app, users can easily find suitable movie timings, enjoy a seamless booking process, and immerse themselves in a more personalized and enjoyable movie-going experience.',
        additional: ['Time-Saving', 'Enhanced User Experience'],
        function: ['User Experience', 'Brand Analysis'],
        detail: 'images/works/design_ambassador.png'
    },
];