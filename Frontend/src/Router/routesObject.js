import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import InfoIcon from '@material-ui/icons/Info';
import BuildIcon from '@material-ui/icons/Build';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import WorkIcon from '@material-ui/icons/Work';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

export const ROUTES_ARRAY = [
    { link: '/', title: 'Home', Icon: HomeIcon },
    { link: '/about-us', title: 'About Us', Icon: InfoIcon },
    { link: '/services', title: 'Services', Icon: BuildIcon },
    { link: '/our-work', title: 'Our Work', Icon: AccountTreeIcon },
    { link: '/safety', title: 'Safety', Icon: LocalHospitalIcon },
    { link: '/equipment', title: 'Equipment', Icon: LocalShippingIcon },
    { link: '/news', title: 'News', Icon: AnnouncementIcon },
    { link: '/careers', title:' Careers', Icon: WorkIcon },
    { link: '/contact-us', title: 'Contact Us', Icon: ContactPhoneIcon },
    { link: '/admin/login', title: 'Admin: Login', Icon: SupervisorAccountIcon }
];

export const AUTHED_ROUTES_ARRAY = [
    { title: 'Projects', items: [
        { link: '/admin/add-project', title: 'Admin: Add Project', Icon: AddIcon },
        { link: '/admin/edit-project', title: 'Admin: Edit Project', Icon: EditIcon },
        { link: '/admin/delete-project', title: 'Admin: Delete Project', Icon: DeleteIcon }
    ]},
    { title: 'News', items: [
        { link: '/admin/add-news', title: 'Admin: Add News', Icon: AddIcon },
        { link: '/admin/edit-news', title: 'Admin: Edit News', Icon: EditIcon },
        { link: '/admin/delete-news', title: 'Admin: Delete News', Icon: DeleteIcon }
    ]},
    { title: 'Equipment', items: [
        { link: '/admin/add-equipment', title: 'Admin: Add Equipment', Icon: AddIcon },
        { link: '/admin/edit-equipment', title: 'Admin: Edit Equipment', Icon: EditIcon },
        { link: '/admin/delete-equipment', title: 'Admin: Delete Equipment', Icon: DeleteIcon }
    ]},
    { title: 'Careers', items: [
        { link: '/admin/add-career', title: 'Admin: Add Career', Icon: AddIcon },
        { link: '/admin/edit-career', title: 'Admin: Edit Career', Icon: EditIcon },
        { link: '/admin/delete-career', title: 'Admin: Delete Career', Icon: DeleteIcon }
    ]}
];