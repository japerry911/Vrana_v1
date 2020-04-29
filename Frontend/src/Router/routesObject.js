import HomeIcon from '@material-ui/icons/HomeOutlined';

export const ROUTES_ARRAY = [
    { link: '/', title: 'Home', Icon: HomeIcon },
    { link: '/about-us', title: 'About Us' },
    { link: '/services', title: 'Services' },
    { link: '/our-work', title: 'Our Work' },
    { link: '/safety', title: 'Safety' },
    { link: '/equipment', title: 'Equipment' },
    { link: '/news', title: 'News' },
    { link: '/careers', title:' Careers' },
    { link: '/contact-us', title: 'Contact Us' },
    { link: '/admin/login', title: 'Admin: Login' }
];

export const AUTHED_ROUTES_ARRAY = [
    { link: '/admin/add-project', title: 'Admin: Add Project' },
    { link: '/admin/edit-project', title: 'Admin: Edit Project' },
    { link: '/admin/delete-project', title: 'Admin: Delete Project' },
    { link: '/admin/add-news', title: 'Admin: Add News' },
    { link: '/admin/delete-news', title: 'Admin: Delete News' },
    { link: '/admin/edit-news', title: 'Admin: Edit News' },
    { link: '/admin/add-equipment', title: 'Admin: Add Equipment' },
    { link: '/admin/delete-equipment', title: 'Admin: Delete Equipment' },
    { link: '/admin/edit-equipment', title: 'Admin: Edit Equipment' },
    { link: '/admin/add-career', title: 'Admin: Add Career' },
    { link: '/admin/delete-career', title: 'Admin: Delete Career' },
    { link: '/admin/edit-career', title: 'Admin: Edit Career' }
];