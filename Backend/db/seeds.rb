Project.destroy_all
Admin.destroy_all
NewsArticle.destroy_all
Equipment.destroy_all

Admin.create(username: 'VranaAdmin', password: 'TEST')

# Our Work

# Commercial 
Project.create(
    Client_Name: 'Ameristar Casino & Hotel',
    Size: '40,000',
    Location: 'Council Bluffs, IA',
    YearCompleted_ProjectStatus: '',
    Construction_Value: '',
    Scope_Of_Work: '',
    Industry: 'Commercial',
    First_P_Header: 'ELEVATING THE CASINO EXPERIENCE',
    First_P_Content: 'Vrana completed several projects including a Pavilion Renovation, Hotel Lobby, and Main Street Sweet Shoppe.
    Over 40,000 lf of new wood moldings were install and painted during the renovation of the atrium streetscape. A completely
    new Hotel Lobby was built within the existing facility. Vrana renovated the existing Players Club counter into the Main Street Sweet Shoppe.',
    Key_Projects_Bullets: "A video wall and sound system was also installed, along with a complete relighting of the Pavilion.|||Built in a short time frame
                           and scheduled to minimize disruption to patrons' visits, Vrana self-performed the work, working
                           twelve hour shifts, six days a week.|||During the construction process, 24-hour building access was maintained for hotel guests.
                           Local fire code also mandated that the elevator shaft doors have 24-hour protection. To accomplish this Vrana devised automatic
                           doors that could be closed in the event of fire.|||Elegant materials, such as marble floors and counter tops, wood paneling and elaborate
                           millwork created a wonderful shopping experience.",
    Card_Image_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/Ameristar/Messages+Image(1899638357).jpeg',
    Template_Image1_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/Ameristar/Messages+Image(1899638357).jpeg',
    Template_Image2_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/Ameristar/Messages+Image(2283976455).jpeg'
)

Project.create(
    Client_Name: 'Omaha Steaks Headquarters',
    Size: '',
    Location: '',
    YearCompleted_ProjectStatus: '',
    Construction_Value: '',
    Scope_Of_Work: '',
    Industry: 'Commercial',
    First_P_Header: 'First P Header',
    First_P_Content: 'First P Content',
    Key_Projects_Bullets: 'FirstBullet',
    Card_Image_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/OmahaSteaks/Messages+Image(3399849572).jpeg',
    Template_Image1_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/OmahaSteaks/Messages+Image(4159958811).jpeg',
    Template_Image2_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/OmahaSteaks/Messages+Image(1767237490).jpeg'
)

Project.create(
    Client_Name: 'Omaha Steaks Telemarketing Center Renovation',
    Size: '',
    Location: '',
    YearCompleted_ProjectStatus: '',
    Construction_Value: '',
    Scope_Of_Work: '',
    Industry: 'Commercial',
    First_P_Header: 'First P Header',
    First_P_Content: 'First P Content',
    Key_Projects_Bullets: 'FirstBullet',
    Card_Image_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/OmahaSteaks/Screen+Shot+2020-04-24+at+8.59.57+PM.jpeg',
    Template_Image1_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/OmahaSteaks/Messages+Image(1432563105).jpeg',
    Template_Image2_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/OmahaSteaks/Messages+Image(1767237490).jpeg'
)

Project.create(
    Client_Name: 'Omaha Steaks 96th Street Office Renovation',
    Size: '',
    Location: '',
    YearCompleted_ProjectStatus: '',
    Construction_Value: '',
    Scope_Of_Work: '',
    Industry: 'Commercial',
    First_P_Header: 'First P Header',
    First_P_Content: 'First P Content',
    Key_Projects_Bullets: 'FirstBullet',
    Card_Image_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/OmahaSteaks/vrana_project_omahasteaks3+(1).jpg',
    Template_Image1_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/OmahaSteaks/Messages+Image(1432563105).jpeg',
    Template_Image2_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/OmahaSteaks/Messages+Image(1767237490).jpeg'
)

Project.create(
    Client_Name: 'Omaha Steaks F Street Freezer Facility',
    Size: '',
    Location: '',
    YearCompleted_ProjectStatus: '',
    Construction_Value: '',
    Scope_Of_Work: '',
    Industry: 'Commercial',
    First_P_Header: 'First P Header',
    First_P_Content: 'First P Content',
    Key_Projects_Bullets: 'FirstBullet',
    Card_Image_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/OmahaSteaks/vrana_project_omahasteaks2.jpg',
    Template_Image1_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/OmahaSteaks/Messages+Image(1432563105).jpeg',
    Template_Image2_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/OmahaSteaks/Messages+Image(1767237490).jpeg'
)

Project.create(
    Client_Name: 'Omaha Steaks F Street Production Facility',
    Size: '',
    Location: '',
    YearCompleted_ProjectStatus: '',
    Construction_Value: '',
    Scope_Of_Work: '',
    Industry: 'Commercial',
    First_P_Header: 'First P Header',
    First_P_Content: 'First P Content',
    Key_Projects_Bullets: 'FirstBullet',
    Card_Image_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/OmahaSteaks/Screen+Shot+2020-04-24+at+9.13.42+PM.png',
    Template_Image1_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/OmahaSteaks/Messages+Image(1432563105).jpeg',
    Template_Image2_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/OmahaSteaks/Messages+Image(1767237490).jpeg'
)

Project.create(
    Client_Name: 'Steck Laboratories',
    Size: '',
    Location: '',
    YearCompleted_ProjectStatus: '',
    Construction_Value: '',
    Scope_Of_Work: '',
    Industry: 'Commercial',
    First_P_Header: 'First P Header',
    First_P_Content: 'First P Content',
    Key_Projects_Bullets: 'FirstBullet',
    Card_Image_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/SteckLabs/vrana_project_streck2.jpg',
    Template_Image1_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/SteckLabs/vrana_project_streck1.jpg',
    Template_Image2_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/SteckLabs/vrana_project_streck4.jpg'
)

Project.create(
    Client_Name: "Rotella's Italian Bakery",
    Size: '',
    Location: '',
    YearCompleted_ProjectStatus: '',
    Construction_Value: '',
    Scope_Of_Work: '',
    Industry: 'Commercial',
    First_P_Header: 'First P Header',
    First_P_Content: 'First P Content',
    Key_Projects_Bullets: 'FirstBullet',
    Card_Image_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/Rotellas/vrana_project_rotellas1.jpg',
    Template_Image1_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/Rotellas/vrana_project_rotellas2.jpg',
    Template_Image2_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/Rotellas/vrana_project_rotellas1.jpg'
)

Project.create(
    Client_Name: 'Net Renovation & Addition',
    Size: '',
    Location: '',
    YearCompleted_ProjectStatus: '',
    Construction_Value: '',
    Scope_Of_Work: '',
    Industry: 'Commercial',
    First_P_Header: 'First P Header',
    First_P_Content: 'First P Content',
    Key_Projects_Bullets: 'FirstBullet',
    Card_Image_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/Net/vrana_project_net1.jpg',
    Template_Image1_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/Net/vrana_project_net2.jpg',
    Template_Image2_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/Net/vrana_project_net3.jpg'
)

Project.create(
    Client_Name: 'Deer Creek Clubhouse',
    Size: '',
    Location: '',
    YearCompleted_ProjectStatus: '',
    Construction_Value: '',
    Scope_Of_Work: '',
    Industry: 'Commercial',
    First_P_Header: 'First P Header',
    First_P_Content: 'First P Content',
    Key_Projects_Bullets: 'FirstBullet',
    Card_Image_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/DeerCreek/vrana_project_deercreek1.jpg',
    Template_Image1_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/DeerCreek/vrana_project_deercreek2.jpg',
    Template_Image2_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/DeerCreek/vrana_project_deercreek1.jpg'
)

Project.create(
    Client_Name: 'Cassling Diagnostic Imaging',
    Size: '',
    Location: '',
    YearCompleted_ProjectStatus: '',
    Construction_Value: '',
    Scope_Of_Work: '',
    Industry: 'Commercial',
    First_P_Header: 'First P Header',
    First_P_Content: 'First P Content',
    Key_Projects_Bullets: 'FirstBullet',
    Card_Image_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/Cassling/vrana_project_cassling1.jpg',
    Template_Image1_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/Cassling/vrana_project_cassling1.jpg',
    Template_Image2_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/Cassling/vrana_project_cassling1.jpg'
)

Project.create(
    Client_Name: 'Morgan Parking Place',
    Size: '',
    Location: '',
    YearCompleted_ProjectStatus: '',
    Construction_Value: '',
    Scope_Of_Work: '',
    Industry: 'Commercial',
    First_P_Header: 'First P Header',
    First_P_Content: 'First P Content',
    Key_Projects_Bullets: 'FirstBullet',
    Card_Image_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/MorganPlace/vrana_project_morganparking1.jpg',
    Template_Image1_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/MorganPlace/vrana_project_morganparking2.jpg',
    Template_Image2_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/MorganPlace/vrana_project_morganparking2.jpg'
)

Project.create(
    Client_Name: 'MUD Florence Water Treatment Plant',
    Size: '',
    Location: '',
    YearCompleted_ProjectStatus: '',
    Construction_Value: '',
    Scope_Of_Work: '',
    Industry: 'Commercial',
    First_P_Header: 'First P Header',
    First_P_Content: 'First P Content',
    Key_Projects_Bullets: 'FirstBullet',
    Card_Image_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/MUDFlorence/vrana_project_mud1.jpg',
    Template_Image1_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/MUDFlorence/vrana_project_mud2.jpg',
    Template_Image2_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/MUDFlorence/vrana_project_mud1.jpg'
)

Project.create(
    Client_Name: 'Douglas County Hospital',
    Size: '',
    Location: '',
    YearCompleted_ProjectStatus: '',
    Construction_Value: '',
    Scope_Of_Work: '',
    Industry: 'Commercial',
    First_P_Header: 'First P Header',
    First_P_Content: 'First P Content',
    Key_Projects_Bullets: 'FirstBullet',
    Card_Image_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/DouglasCountyHospital/vrana_project_douglashospital1.jpg',
    Template_Image1_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/DouglasCountyHospital/vrana_project_douglashospital1.jpg',
    Template_Image2_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/DouglasCountyHospital/vrana_project_douglashospital1.jpg'
)

# Retail
Project.create(
    Client_Name: "Baker's Supermarkets",
    Size: '',
    Location: '',
    YearCompleted_ProjectStatus: '',
    Construction_Value: '',
    Scope_Of_Work: '',
    Industry: 'Retail',
    First_P_Header: 'First P Header',
    First_P_Content: 'First P Content',
    Key_Projects_Bullets: 'FirstBullet',
    Card_Image_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/BakersSupermarkets/vrana_project_bakers1.jpg',
    Template_Image1_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/BakersSupermarkets/vrana_project_bakers2.jpg',
    Template_Image2_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/BakersSupermarkets/vrana_project_bakers1.jpg'
)

Project.create(
    Client_Name: "Omaha Steaks Retail Stores",
    Size: '',
    Location: '',
    YearCompleted_ProjectStatus: '',
    Construction_Value: '',
    Scope_Of_Work: '',
    Industry: 'Retail',
    First_P_Header: 'First P Header',
    First_P_Content: 'First P Content',
    Key_Projects_Bullets: 'FirstBullet',
    Card_Image_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/OmahaSteaksRetailStores/vrana_project_omahasteaks5.jpg',
    Template_Image1_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/OmahaSteaksRetailStores/vrana_project_omahasteaks8.jpg',
    Template_Image2_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/OmahaSteaksRetailStores/vrana_project_omahasteaks5.jpg'
)

Project.create(
    Client_Name: "Eagle Run Shopping Center",
    Size: '',
    Location: '',
    YearCompleted_ProjectStatus: '',
    Construction_Value: '',
    Scope_Of_Work: '',
    Industry: 'Retail',
    First_P_Header: 'First P Header',
    First_P_Content: 'First P Content',
    Key_Projects_Bullets: 'FirstBullet',
    Card_Image_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/EagleRun/vrana_project_eaglerun1.jpg',
    Template_Image1_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/EagleRun/vrana_project_eaglerun2.jpg',
    Template_Image2_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/EagleRun/vrana_project_eaglerun1.jpg'
)

Project.create(
    Client_Name: "One Pacific Place Shopping Center",
    Size: '',
    Location: '',
    YearCompleted_ProjectStatus: '',
    Construction_Value: '',
    Scope_Of_Work: '',
    Industry: 'Retail',
    First_P_Header: 'First P Header',
    First_P_Content: 'First P Content',
    Key_Projects_Bullets: 'FirstBullet',
    Card_Image_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/OnePacificPlace/vrana_project_onepacific1.jpg',
    Template_Image1_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/OnePacificPlace/vrana_project_onepacific2.jpg',
    Template_Image2_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/OnePacificPlace/vrana_project_onepacific1.jpg'
)

# Housing
Project.create(
    Client_Name: "Offutt A.F.B - ADL Dining Hall",
    Size: '',
    Location: 'Bellevue, Nebraska',
    YearCompleted_ProjectStatus: '',
    Construction_Value: '',
    Scope_Of_Work: '',
    Industry: 'Housing',
    First_P_Header: 'First P Header',
    First_P_Content: 'First P Content',
    Key_Projects_Bullets: 'FirstBullet',
    Card_Image_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/Offutt/vrana_project_offutt1.jpg',
    Template_Image1_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/Offutt/offutt0_3dbc85be-5056-a36a-090ccd539a515042.jpg',
    Template_Image2_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/Offutt/vrana_project_offutt1.jpg'
)

Project.create(
    Client_Name: "Douglas County Jail",
    Size: '',
    Location: 'Omaha, Nebraska',
    YearCompleted_ProjectStatus: '',
    Construction_Value: '',
    Scope_Of_Work: '',
    Industry: 'Housing',
    First_P_Header: 'First P Header',
    First_P_Content: 'First P Content',
    Key_Projects_Bullets: 'FirstBullet',
    Card_Image_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/DouglasCountyJail/vrana_project_douglasjail1.jpg',
    Template_Image1_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/DouglasCountyJail/vrana_project_douglasjail1.jpg',
    Template_Image2_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/DouglasCountyJail/vrana_project_douglasjail1.jpg'
)

Project.create(
    Client_Name: "Crown Tower Housing",
    Size: '',
    Location: '',
    YearCompleted_ProjectStatus: '',
    Construction_Value: '',
    Scope_Of_Work: '',
    Industry: 'Housing',
    First_P_Header: 'First P Header',
    First_P_Content: 'First P Content',
    Key_Projects_Bullets: 'FirstBullet',
    Card_Image_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/CrownTower/vrana_project_crowntower1.jpg',
    Template_Image1_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/CrownTower/vrana_project_crowntower1.jpg',
    Template_Image2_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/CrownTower/vrana_project_crowntower1.jpg'
)

# Religious/Educational
Project.create(
    Client_Name: 'North High School',
    Size: '',
    Location: '',
    YearCompleted_ProjectStatus: '',
    Construction_Value: '',
    Scope_Of_Work: '',
    Industry: 'Religious/Educational',
    First_P_Header: 'First P Header',
    First_P_Content: 'First P Content',
    Key_Projects_Bullets: 'FirstBullet',
    Card_Image_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/OmahaNorth/vrana_project_northhigh3.jpg',
    Template_Image1_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/OmahaNorth/vrana_project_northhigh2.jpg',
    Template_Image2_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/OmahaNorth/vrana_project_northhigh1.jpg'
)

Project.create(
    Client_Name: 'Christ Community Church',
    Size: '',
    Location: '',
    YearCompleted_ProjectStatus: '',
    Construction_Value: '',
    Scope_Of_Work: '',
    Industry: 'Religious/Educational',
    First_P_Header: 'First P Header',
    First_P_Content: 'First P Content',
    Key_Projects_Bullets: 'FirstBullet',
    Card_Image_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/ChristCommunityChurch/vrana_project_christcommunity2.jpg',
    Template_Image1_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/ChristCommunityChurch/vrana_project_christcommunity3.jpg',
    Template_Image2_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/ChristCommunityChurch/vrana_project_christcommunity1.jpg'
)

# Parking Structures
Project.create(
    Client_Name: 'Carriage Parking Garage',
    Size: '',
    Location: '',
    YearCompleted_ProjectStatus: '',
    Construction_Value: '',
    Scope_Of_Work: '',
    Industry: 'Parking Structures',
    First_P_Header: 'First P Header',
    First_P_Content: 'First P Content',
    Key_Projects_Bullets: 'FirstBullet',
    Card_Image_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/CarriageParking/vrana_project_carriage1.jpg',
    Template_Image1_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/CarriageParking/vrana_project_carriage2.jpg',
    Template_Image2_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/CarriageParking/vrana_project_carriage1.jpg'
)

Project.create(
    Client_Name: 'Eppley Airfield Parking Garage',
    Size: '',
    Location: '',
    YearCompleted_ProjectStatus: '',
    Construction_Value: '',
    Scope_Of_Work: '',
    Industry: 'Parking Structures',
    First_P_Header: 'First P Header',
    First_P_Content: 'First P Content',
    Key_Projects_Bullets: 'FirstBullet',
    Card_Image_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/EppleyParking/vrana_project_eppley1.jpg',
    Template_Image1_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/EppleyParking/vrana_project_eppley2.jpg',
    Template_Image2_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/EppleyParking/vrana_project_eppley1.jpg'
)

Project.create(
    Client_Name: 'Omni Center Parking Garage',
    Size: '',
    Location: '',
    YearCompleted_ProjectStatus: '',
    Construction_Value: '',
    Scope_Of_Work: '',
    Industry: 'Parking Structures',
    First_P_Header: 'First P Header',
    First_P_Content: 'First P Content',
    Key_Projects_Bullets: 'FirstBullet',
    Card_Image_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/OmniCenterParking/vrana_project_omniparking1.jpg',
    Template_Image1_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/OmniCenterParking/vrana_project_omniparking2.jpg',
    Template_Image2_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/OmniCenterParking/vrana_project_omniparking1.jpg'
)

Project.create(
    Client_Name: 'Morgan Place Parking Garage',
    Size: '',
    Location: '',
    YearCompleted_ProjectStatus: '',
    Construction_Value: '',
    Scope_Of_Work: '',
    Industry: 'Parking Structures',
    First_P_Header: 'First P Header',
    First_P_Content: 'First P Content',
    Key_Projects_Bullets: 'FirstBullet',
    Card_Image_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/MorganPlaceParking/vrana_project_morganparking1+(1).jpg',
    Template_Image1_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/MorganPlaceParking/vrana_project_morganparking2+(1).jpg',
    Template_Image2_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/MorganPlaceParking/vrana_project_morganparking2+(1).jpg'
)

Project.create(
    Client_Name: 'Omaha Civic Auditorium Parking Garage',
    Size: '',
    Location: '',
    YearCompleted_ProjectStatus: '',
    Construction_Value: '',
    Scope_Of_Work: '',
    Industry: 'Parking Structures',
    First_P_Header: 'First P Header',
    First_P_Content: 'First P Content',
    Key_Projects_Bullets: 'FirstBullet',
    Card_Image_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/OmahaCivicParking/vrana_project_civicparking1.jpg',
    Template_Image1_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/OmahaCivicParking/vrana_project_civicparking2.jpg',
    Template_Image2_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/OmahaCivicParking/vrana_project_civicparking1.jpg'
)

# Civil/Heavy Highway
Project.create(
    Client_Name: 'I-680/West Dodge Road Interchange',
    Size: '',
    Location: '',
    YearCompleted_ProjectStatus: '',
    Construction_Value: '',
    Scope_Of_Work: '',
    Industry: 'Civil/Heavy Highway',
    First_P_Header: 'First P Header',
    First_P_Content: 'First P Content',
    Key_Projects_Bullets: 'FirstBullet',
    Card_Image_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/I680WestDodgeRoadInt/vrana_project_680dodgeinterchange1.jpg',
    Template_Image1_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/I680WestDodgeRoadInt/vrana_project_680dodgeinterchange2.jpg',
    Template_Image2_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/I680WestDodgeRoadInt/vrana_project_680dodgeinterchange1.jpg'
)

Project.create(
    Client_Name: 'I-680/West Maple Interchange',
    Size: '',
    Location: '',
    YearCompleted_ProjectStatus: '',
    Construction_Value: '',
    Scope_Of_Work: '',
    Industry: 'Civil/Heavy Highway',
    First_P_Header: 'First P Header',
    First_P_Content: 'First P Content',
    Key_Projects_Bullets: 'FirstBullet',
    Card_Image_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/I680WestMapleInt/vrana_project_680mapleinterchange1.jpg',
    Template_Image1_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/I680WestMapleInt/vrana_project_680mapleinterchange2.jpg',
    Template_Image2_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/I680WestMapleInt/vrana_project_680mapleinterchange3.jpg'
)

Project.create(
    Client_Name: 'Pacific Street and 168th Street Intersection',
    Size: '',
    Location: '',
    YearCompleted_ProjectStatus: '',
    Construction_Value: '',
    Scope_Of_Work: '',
    Industry: 'Civil/Heavy Highway',
    First_P_Header: 'First P Header',
    First_P_Content: 'First P Content',
    Key_Projects_Bullets: 'FirstBullet',
    Card_Image_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/PacSt168StInt/vrana_project_168pacific1.jpg',
    Template_Image1_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/PacSt168StInt/vrana_project_168pacific1.jpg',
    Template_Image2_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/PacSt168StInt/vrana_project_168pacific1.jpg'
)

Project.create(
    Client_Name: 'Barrington Park Infrastructure',
    Size: '',
    Location: '',
    YearCompleted_ProjectStatus: '',
    Construction_Value: '',
    Scope_Of_Work: '',
    Industry: 'Civil/Heavy Highway',
    First_P_Header: 'First P Header',
    First_P_Content: 'First P Content',
    Key_Projects_Bullets: 'FirstBullet',
    Card_Image_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/BarringtonParkInf/vrana_project_barringtonpark1.jpg',
    Template_Image1_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/BarringtonParkInf/vrana_project_barringtonpark2.jpg',
    Template_Image2_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images/BarringtonParkInf/vrana_project_barringtonpark1.jpg'
)

# News_Articles

NewsArticle.create(
    Headline: "Construction Dive's 'mini megacities' to watch: Omaha, Nebraska",
    Source: 'Construction Dive',
    Date_Published: '2020-01-15',
    Feature_Image_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/News_Articles/15a0149dc3f41f4aaa533f2b41554d61.jpg',
    Article_Link: 'https://www.constructiondive.com/news/construction-dives-mini-megacities-to-watch-omaha-nebraska/570308/'
)

NewsArticle.create(
    Headline: "A progress report on South Omaha bike trail being built at 35th, Vinton Streets",
    Source: 'Omaha World-Herald',
    Date_Published: '2015-09-14',
    Feature_Image_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/News_Articles/55f6fb465f3f1.image.jpg',
    Article_Link: 'https://www.omaha.com/news/local/a-progress-report-on-south-omaha-bike-trail-being-built/article_2684ef07-1243-5c1b-965c-46d5a7603507.html'
)

NewsArticle.create(
    Headline: "New warehouse to aid Rotella’s growth",
    Source: 'Omaha World-Herald',
    Date_Published: '2015-01-29',
    Feature_Image_Url: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/News_Articles/54c970df7c6b6.image.jpg',
    Article_Link: 'https://www.omaha.com/money/new-warehouse-to-aid-rotella-s-growth/article_422a34b3-57a6-5777-8322-d49d827f0e58.html'
)

# Equipment
Equipment.create(
    Name: 'Harrington 2 Ton Electric Chain Hoist',
    Price: 3950.00,
    Year: '2003',
    Card_Image: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/Equipment/Screen+Shot+2020-04-26+at+6.09.46+PM.png',
    Description: 'For sale: Used Harrington 2 Electric Chain Hoist and Manual Trolley. Specs - 2 ton electric hoist, 3 phrase, 60` of lift, 20` pendant,
                2 speed with chain bag and manual trolley. This piece of equipment is rocking!!! Come buy yourself a fricken chain hoist! I NEED SLEEP! WHAT I DO FOR YOU DAD,
                IT`S 4:29 AM!!!! AHHH I LOVE YOU!',
    Image_Left: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/Equipment/Screen+Shot+2020-04-26+at+7.57.53+PM.png',
    Image_Right: 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/Equipment/Screen+Shot+2020-04-26+at+7.58.03+PM.png'
)

# Careers
Career.create(
    Title: 'Application - General',
    Department: 'TBD',
    Location: 'Omaha, NE',
    Job_Url: 'http://vrana.applicantstack.com/x/detail/a2wm711fw5gn'
)

Career.create(
    Title: 'Carpenter',
    Department: 'Field',
    Location: 'Omaha, NE',
    Job_Url: 'http://vrana.applicantstack.com/x/detail/a2wm711whjrz'
)

Career.create(
    Title: 'Carpenter (Formwork)',
    Department: 'Field',
    Location: 'Omaha, NE',
    Job_Url: 'http://vrana.applicantstack.com/x/detail/a2wm711ceh5t'
)

Career.create(
    Title: 'Cement Finisher',
    Department: 'Field',
    Location: 'Omaha, NE',
    Job_Url: 'http://vrana.applicantstack.com/x/detail/a2wm7110rb7z'
)

Career.create(
    Title: 'Concrete Saw & Sealant Operator',
    Department: 'Field',
    Location: 'Omaha, NE',
    Job_Url: 'http://vrana.applicantstack.com/x/detail/a2wm711gcyip'
)

Career.create(
    Title: 'Equipment Operator',
    Department: 'Field',
    Location: 'Omaha, NE',
    Job_Url: 'http://vrana.applicantstack.com/x/detail/a2wm71120it0'
)

Career.create(
    Title: 'Equipment Operator (Concrete Paving Equipment)',
    Department: 'Field',
    Location: 'Omaha, NE',
    Job_Url: 'http://vrana.applicantstack.com/x/detail/a2wm711be5c7'
)

Career.create(
    Title: 'Fuel Lube Oiler',
    Department: 'Field',
    Location: 'Omaha, NE',
    Job_Url: 'http://vrana.applicantstack.com/x/detail/a2wm7118tpqg'
)

Career.create(
    Title: 'General Laborer',
    Department: 'Field',
    Location: 'Omaha, NE',
    Job_Url: 'http://vrana.applicantstack.com/x/detail/a2wm711aqq0l'
)

Career.create(
    Title: 'Grade Crew / Form Setters (Highway Construction)',
    Department: 'Field',
    Location: 'Omaha, NE',
    Job_Url: 'http://vrana.applicantstack.com/x/detail/a2wm711s4kj2'
)

Career.create(
    Title: 'Mechanic (Heavy Equipment & Trucks)',
    Department: 'Field',
    Location: 'Omaha, NE',
    Job_Url: 'http://vrana.applicantstack.com/x/detail/a2wm711xpbha'
)

Career.create(
    Title: 'Pipe Layer',
    Department: 'Field',
    Location: 'Omaha, NE',
    Job_Url: 'http://vrana.applicantstack.com/x/detail/a2wm711glt8z'
)

Career.create(
    Title: 'Project Manager / Engineer - Civil Construction',
    Department: 'Field',
    Location: 'Omaha, NE',
    Job_Url: 'http://vrana.applicantstack.com/x/detail/a2wm711eoak2'
)

Career.create(
    Title: 'Project Manager - Commercial Building Projects',
    Department: 'Field',
    Location: 'Omaha, NE',
    Job_Url: 'http://vrana.applicantstack.com/x/detail/a2wm711zhpj8'
)

Career.create(
    Title: 'Superintendent (General Building Construction)',
    Department: 'Field',
    Location: 'Omaha, NE',
    Job_Url: 'http://vrana.applicantstack.com/x/detail/a2wm71170ujp'
)

Career.create(
    Title: 'Superintendent (Heavy & Highway Construction)',
    Department: 'Field',
    Location: 'Omaha, NE',
    Job_Url: 'http://vrana.applicantstack.com/x/detail/a2wm711wthhw'
)

Career.create(
    Title: 'Truck Driver',
    Department: 'Field',
    Location: 'Omaha, NE',
    Job_Url: 'http://vrana.applicantstack.com/x/detail/a2wm711w6kz4'
)