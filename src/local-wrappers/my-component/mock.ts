import { DropDownModal, FooterDataModal, DropDownDataModal, UserDropDownModal, FavoriteDropdownModal, IconListDataModel, UserInfoModal, ShoppingCartModel, commonDropdownModal, Step, SelectDropDownDataModal, Message, MessageJob } from "../../shared/interface";
import { FeedItem, MessengerDataModal, JobMessageModal, MsgDataModal, EventMessageModal } from "../../shared/messenger-interface";

export const navigation: DropDownDataModal = {
  list: [
    {
      id: "menu.home",
      title: "Home",
      link: "/ats/requisitions",
      highlightedLink: "/ats",
      preventAnchorDefault: true,
    },
    {
      id: "menu.requisitions",
      title: "Requisitions",
      link: "/ats/requisitions",
      highlightedLink: "/ats",
      preventAnchorDefault: true,
      list: [
        {
          id: "menu.requisitions.create",
          title: "Create Requisition",
          link:
            "https://php56-sandbox-39.luceosolutions-dev.com/bo.php/poste/dossier?tab=form&new=true&readonly=0",
          isExternal: true,
          highlightedLink: "/ats",
          list: [],
          emitEvent: true,
        },
        {
          id: "menu.requisitions.list",
          title: "All positions",
          highlightedLink: "/ats",
          preventAnchorDefault: true,
        },
        {
          id: "menu.job_postings.list",
          title: "Job Postings",
          isExternal: true,
          highlightedLink: "/ats",
          preventAnchorDefault: true,
          emitEvent: true,
        },
        {
          id: "menu.drafts.list",
          title: "Draft Requisitions",
          link: "/ats/requisitions/drafts",
          highlightedLink: "/ats",
        },
        {
          id: "menu.requisitions.my",
          title: "My Requisitions",
          link: "/ats/requisitions",
          highlightedLink: "/ats",
        },
        {
          id: "menu.job_postings.my",
          title: "My Job Postings",
          link:
            "https://php56-sandbox-39.luceosolutions-dev.com/bo.php/publication/liste?IDUtilisateur=1",
          isExternal: true,
          highlightedLink: "/ats",
          preventAnchorDefault: true,
        },
        {
          id: "menu.drafts.my",
          title: "My Drafts",
          link: "/ats/requisitions/drafts",
          highlightedLink: "/ats",
        },
      ],
    },
    {
      id: "menu.candidates",
      title: "Candidates",
      link:
        "https://php56-sandbox-39.luceosolutions-dev.com/bo.php/prehome/candidat",
      list: [
        {
          id: "menu.candidates.new",
          title: "New",
          link:
            "https://php56-sandbox-39.luceosolutions-dev.com/bo.php/applicant/folder?chkVivier=1&enter=true",
          isExternal: true,
          highlightedLink: "/ats",
          list: [],
        },
        {
          id: "menu.candidates.in_progress",
          title: "In Progress",
          link:
            "https://php56-sandbox-39.luceosolutions-dev.com/bo.php/applicant/folder?chkVivier=4&enter=true",
          isExternal: true,
          highlightedLink: "/ats",
        },
        {
          id: "menu.candidates.internal",
          title: "Hired",
          link:
            "https://php56-sandbox-39.luceosolutions-dev.com/bo.php/applicant/folder?chkVivier=5&enter=true",
          isExternal: true,
          highlightedLink: "/ats",
        },
        {
          id: "menu.candidates.rejected",
          title: "Applicant Pool",
          link:
            "https://php56-sandbox-39.luceosolutions-dev.com/bo.php/applicant/folder?chkVivier=6&enter=true",
          isExternal: true,
          highlightedLink: "/ats",
        },
        {
          id: "menu.candidates.archive",
          title: "Applicant Archive",
          link:
            "https://php56-sandbox-39.luceosolutions-dev.com/bo.php/applicant/folder?chkVivier=7&enter=true",
          isExternal: true,
          highlightedLink: "/ats",
        },
        {
          id: "menu.folders.list",
          title: "Folders",
          link:
            "https://php56-sandbox-39.luceosolutions-dev.com/bo.php/candidat/bannette/edition",
          isExternal: true,
          highlightedLink: "/ats",
        },
        {
          id: "menu.imports",
          title: "Import Candidates",
          link:
            "https://php56-sandbox-39.luceosolutions-dev.com/bo.php/prehome/import",
          highlightedLink: "/ats",
          list: [
            {
              id: "menu.import.email",
              title: "EMails",
              link:
                "https://php56-sandbox-39.luceosolutions-dev.com/bo.php/candidat/import/liste?type=1",
              isExternal: true,
              highlightedLink: "/ats",
            },
            {
              id: "menu.import.scan",
              title: "Scans",
              link:
                "https://php56-sandbox-39.luceosolutions-dev.com/bo.php/candidat/import/liste?type=2",
              isExternal: true,
              highlightedLink: "/ats",
            },
            {
              id: "menu.import.manual",
              title: "Manual",
              link:
                "https://php56-sandbox-39.luceosolutions-dev.com/bo.php/candidat/import/edition?type=0",
              isExternal: true,
              highlightedLink: "/ats",
            },
          ],
          isExternal: true,
        },
      ],
      isExternal: true,
      highlightedLink: "/ats",
    },
    {
      id: "menu.communications",
      title: "Communications",
      link:
        "https://php56-sandbox-39.luceosolutions-dev.com/bo.php/prehome/correspondance",
      highlightedLink: "/ats",
      list: [
        {
          id: "menu.communications.candidate",
          title: "Candidates",
          link:
            "https://php56-sandbox-39.luceosolutions-dev.com/bo.php/correspondance_file_attente",
          isExternal: true,
          highlightedLink: "/ats",
        },
        {
          id: "menu.communications.other",
          title: "Others",
          link:
            "https://php56-sandbox-39.luceosolutions-dev.com/bo.php/correspondance_file_attente?contact=true",
          isExternal: true,
          highlightedLink: "/ats",
        },
        {
          id: "menu.communications.history",
          title: "Follow up of Candidate Correspondance ",
          link:
            "https://php56-sandbox-39.luceosolutions-dev.com/bo.php/correspondance_file_attente?historique=true",
          isExternal: true,
          highlightedLink: "/ats",
        },
        {
          id: "menu.mass_mailing.history",
          title: "Mailings Follow up",
          link:
            "https://php56-sandbox-39.luceosolutions-dev.com/bo.php/mailing_historique_lister",
          isExternal: true,
          highlightedLink: "/ats",
        },
      ],
      isExternal: true,
    },
    {
      id: "menu.reports",
      title: "Reports",
      link:
        "https://php56-sandbox-39.luceosolutions-dev.com/bo.php/prehome/reporting",
      list: [
        {
          id: "menu.reports.tableau",
          title: "Reports",
          link:
            "https://php56-sandbox-39.luceosolutions-dev.com/bo.php/reporting",
          isExternal: true,
          highlightedLink: "/ats",
        },
        {
          id: "menu.reports.screeners",
          title: "Screening Questions",
          link:
            "https://php56-sandbox-39.luceosolutions-dev.com/bo.php/statistique?reports=sq",
          isExternal: true,
          highlightedLink: "/ats",
        },
        {
          id: "menu.reports.advanced_query",
          title: "Advanced Query",
          link:
            "https://php56-sandbox-39.luceosolutions-dev.com/bo.php/requeteur",
          isExternal: true,
          highlightedLink: "/ats",
        },
        {
          id: "menu.compliance",
          title: "Applicant Reports",
          link: "https://php56-sandbox-39.luceosolutions-dev.com",
          list: [
            {
              id: "menu.compliance.applicant_flow_log",
              title: "Applicant Flow Log",
              link:
                "https://php56-sandbox-39.luceosolutions-dev.com/bo.php/ofccp/report",
              isExternal: true,
              highlightedLink: "/ats",
            },
            {
              id: "menu.compliance.impact_ratio_analysis",
              title: "Impact Ratio Analysis",
              link:
                "https://php56-sandbox-39.luceosolutions-dev.com/bo.php/ofccp/report/ira",
              isExternal: true,
              highlightedLink: "/ats",
            },
            {
              id: "menu.compliance.eeo",
              title: "EEO",
              link:
                "https://php56-sandbox-39.luceosolutions-dev.com/bo.php/statistique?reports=eeo",
              isExternal: true,
              highlightedLink: "/ats",
            },
          ],
          isExternal: true,
          highlightedLink: "/ats",
        },
        {
          id: "menu.reports.predefined_reports",
          title: "Predefined queries",
          link: "https://php56-sandbox-39.luceosolutions-dev.com",
          list: [
            {
              id: "swdw",
              title: "Apps By Source - Stef ",
              link:
                "https://php56-sandbox-39.luceosolutions-dev.com/bo.php/requeteur_result?iIDRequete=9",
              isExternal: true,
              highlightedLink: "/ats",
            },
          ],
          isExternal: true,
          highlightedLink: "/ats",
        },
      ],
      isExternal: true,
      highlightedLink: "/ats",
    },
    {
      id: "menu.toolbox",
      title: "Toolbox",
      link:
        "https://php56-sandbox-39.luceosolutions-dev.com/bo.php/prehome/ref",
      isExternal: true,
      highlightedLink: "/ats",
    },
    {
      id: "menu.admin",
      title: "Administration",
      link:
        "https://php56-sandbox-39.luceosolutions-dev.com/bo.php/prehome/admin",
      isExternal: true,
      highlightedLink: "/ats",
    },
  ],
};

export const userDropDown: UserDropDownModal[] = [
  {
    title: "Self-Service Reports",
    altTxt: "Self-Service Reports",
    link: "https://recruitment-staging.ace.careerbuilder.com/selfreport",
    newWindow: true,
    isExternal: true,
  },
  {
    title: "Add User",
    altTxt: "Add User",
    link:
      "https://wwwtestemployer.careerbuilder.com/jobposter/accounts/addaccountuser.aspx",
    isExternal: true,
  },
  {
    title: "Manage Users & Licenses",
    altTxt: "Manage Users & Licenses",
    link:
      "https://wwwtestemployer.careerbuilder.com/jobposter/accounts/accountusers.aspx",
    newWindow: true,
    isExternal: true,
  },
  {
    title: "Account Settings",
    altTxt: "Account Settings",
    link:
      "https://wwwtestemployer.careerbuilder.com/jobposte…nts/accountinfo.aspx?Acct_DID=A7F0PT78MTMZ470WBBT",
    newWindow: true,
    isExternal: true,
    emitEvent: true,
  },
  {
    title: "Switch Accounts",
    altTxt: "Switch Accounts",
    link:
      "https://wwwtestemployer.careerbuilder.com/jobposter/accounts/myaccounts.aspx",
    newWindow: true,
    isExternal: true,
    emitEvent: true,
  },
  {
    title: "User Preferences",
    altTxt: "User Preferences",
    link: "https://wwwtestemployer.careerbuilder.com/share/userinfo.aspx",
    newWindow: true,
    isExternal: true,
  },
  {
    title: "Sign Out",
    altTxt: "Sign Out",
    link:
      "https://wwwtestaccounts.careerbuilder.com/share/lo…px?next=http%3a%2f%2fstg.hiring.careerbuilder.com",
    isExternal: true,
  },
];

export const favoriteDropdown: FavoriteDropdownModal = {
  count: "10",
  mainLink: {
    link: "http//:google.com",
  },
  list: [
    {
      date: "01/03/2019",
      title: "Franklin Stevens",
      address: "Chicago, IL",
      phone: "756-987-0987",
      link: "http://google.com",
      newWindow: true,
    },
    {
      date: "01/03/2019",
      title: "Franklin Stevens",
      address: "Chicago, IL",
      phone: "756-987-0987",
    },
    {
      date: "01/03/2019",
      title: "Franklin Stevens",
      address: "Chicago, IL",
      phone: "756-987-0987",
    },
    {
      date: "01/03/2019",
      title: "Franklin Stevens",
      address: "Chicago, IL",
      phone: "756-987-0987",
    },
    {
      date: "01/03/2019",
      title: "Franklin Stevens",
      address: "Chicago, IL",
      phone: "756-987-0987",
    },
  ],
};

export const favoriteDropdownNew: IconListDataModel = {
  count: "10",
  mainLink: {
    link: "http//:google.com",
  },
  icon: "favorite_border",
  heading: "Favorites",
  topLabelColor: "red",
  origin: "your name",
  list: [
    {
      date: "01/03/2019",
      title: "Franklin Stevens",
      address: "Chicago, IL",
      phone: "756-987-0987",
      link: "http://google.com",
      newWindow: true,
      dateLabel: "Favourite",
    },
    {
      date: "01/03/2019",
      title: "Franklin Stevens",
      address: "Chicago, IL",
      phone: "756-987-0987",
    },
    {
      date: "01/03/2019",
      title: "Franklin Stevens",
      address: "Chicago, IL",
      phone: "756-987-0987",
    },
    {
      date: "01/03/2019",
      title: "Franklin Stevens",
      address: "Chicago, IL",
      phone: "756-987-0987",
    },
    {
      date: "01/03/2019",
      title: "Franklin Stevens",
      address: "Chicago, IL",
      phone: "756-987-0987",
    },
  ],
};

export const userInfo: UserInfoModal = {
  first_name: "vikash",
  email: "vikash.ruhil@carrerbuilder.com",
  current_account_name: "TEST DEMO Account",
  last_name: "string",
  headline: "Welcome, Vikash",
};

export const shoppingCart: ShoppingCartModel = {
  count: 8,
  origin: "cart",
};

export const commonDropdown: commonDropdownModal[] = [
  {
    list: [
      {
        title: "Self-Service Reports",
        altTxt: "Self-Service Reports",
        link: "https://recruitment-staging.ace.careerbuilder.com/selfreport",
        newWindow: true,
        isExternal: true,
      },
      {
        title: "Add User",
        altTxt: "Add User",
        link:
          "https://wwwtestemployer.careerbuilder.com/jobposter/accounts/addaccountuser.aspx",
        isExternal: true,
      },
      {
        title: "Manage Users & Licenses",
        altTxt: "Manage Users & Licenses",
        link:
          "https://wwwtestemployer.careerbuilder.com/jobposter/accounts/accountusers.aspx",
        newWindow: true,
        isExternal: true,
      },
      {
        title: "Account Settings",
        altTxt: "Account Settings",
        link:
          "https://wwwtestemployer.careerbuilder.com/jobposte…nts/accountinfo.aspx?Acct_DID=A7F0PT78MTMZ470WBBT",
        newWindow: true,
        isExternal: true,
        emitEvent: true,
      },
      {
        title: "Switch Accounts",
        altTxt: "Switch Accounts",
        link:
          "https://wwwtestemployer.careerbuilder.com/jobposter/accounts/myaccounts.aspx",
        newWindow: true,
        isExternal: true,
        emitEvent: true,
      },
      {
        title: "User Preferences",
        altTxt: "User Preferences",
        link: "https://wwwtestemployer.careerbuilder.com/share/userinfo.aspx",
        newWindow: true,
        isExternal: true,
      },
      {
        title: "Sign Out",
        altTxt: "Sign Out",
        link:
          "https://wwwtestaccounts.careerbuilder.com/share/lo…px?next=http%3a%2f%2fstg.hiring.careerbuilder.com",
        isExternal: true,
      },
    ],
    icon: "apps",
  },
];

export const notificationDropdown: IconListDataModel = {
  origin: "notifications",
  count: "2",
  mainLink: {
    link: "http://google.com",
    emitEvent: true,
  },
  heading: "Notifications",
  icon: "notifications",
  mainLinkLabel: "Click me",
  list: [
    {
      date: "5 minutes ago",
      icon: "notifications",
      title: "RSA Information",
      desc:
        "Your saved search <b>angular</b> has 652 new CV. <br> Click here to find more.",
      link: "/resumes/list",
      unreadStatus: true,
      isExternal: false,
      emitEvent: true,
      emitEventByIcon: true,
    },
    {
      date: "1 month ago",
      icon: "notifications",
      title: "Consequat consectetur",
      desc:
        "<p>Culpa laborum mollit amet magna eu. Esse esse excepteur aute tempor et. Reprehenderit amet aute est deserunt tempor qui ullamco tempor cillum occaecat.</p>",
      link: "",
      unreadStatus: false,
      isExternal: false,
      emitEvent: true,
      emitEventByIcon: true,
    },
  ],
};

const dropdown: DropDownModal[] = [
  {
    title: "All Messages",
    altTxt: "All Messages",
    emitEvent: true,
    id: "1",
    selected: true
  },
  {
    title: "Active Conversations ",
    altTxt: "Active Conversations ",
    emitEvent: true,
    id: "2"
  },
  {
    title: "Archive Conversations ",
    altTxt: "Archive Conversations ",
    emitEvent: true,
    id: "3"
  },
];

const data: FeedItem[] = [
  {
    initials: "VR",
    read: true,
    message: "Hello Vikash, <i>Email reply by unregistered user on 13th August, 2020 4:01 PM.</i> This a test message, please ignore.",
    timestamp: "08/12/2020",
    title: "Vikash Ruhil",
    id: "1",
    initialBackground: 'red',
    sender_uid: "1"
  },
  {
    initials: "VR",
    read: false,
    message: "Hello Vikash, <i>Email reply by unregistered user on 13th August, 2020 4:01 PM.</i> This a test message, please ignore.",
    timestamp: "08/12/2020",
    title: "Vikash Ruhil",
    id: "2",
    sender_uid: "2"
  },
  {
    initials: "VR",
    read: true,
    message: "Hello Vikash, Email reply by unregistered user on 13th August, 2020 4:01 PM. This a test message, please ignore.",
    timestamp: "08/12/2020",
    title: "Vikash Ruhil",
    id: "3",
    sender_uid: "3"
  },
  {
    initials: "VR",
    read: false,
    message: "Hello Vikash, Email reply by unregistered user on 13th August, 2020 4:01 PM. This a test message, please ignore.",
    timestamp: "08/12/2020",
    title: "Vikash Ruhil",
    id: "4",
    sender_uid: "1"
  },
  {
    initials: "VR",
    read: false,
    message: "Hello Vikash, Email reply by unregistered user on 13th August, 2020 4:01 PM. This a test message, please ignore.",
    timestamp: "08/12/2020",
    title: "Vikash Ruhil",
    id: "5",
    sender_uid: "2"
  },
  {
    initials: "VR",
    read: false,
    message: "Hello Vikash, Email reply by unregistered user on 13th August, 2020 4:01 PM. This a test message, please ignore.",
    timestamp: "08/12/2020",
    title: "Vikash Ruhil",
    id: "6",
    sender_uid: "3"
  },
  {
    initials: "VR",
    read: false,
    message: "Hello Vikash, Email reply by unregistered user on 13th August, 2020 4:01 PM. This a test message, please ignore.",
    timestamp: "08/12/2020",
    title: "Vikash Ruhil",
    id: "7",
    sender_uid: "1"
  },
  {
    initials: "VR",
    read: false,
    message: "Hello Vikash, Email reply by unregistered user on 13th August, 2020 4:01 PM. This a test message, please ignore.",
    timestamp: "08/12/2020",
    title: "Vikash Ruhil",
    id: "8",
    sender_uid: "2"
  },
  {
    initials: "VR",
    read: false,
    message: "Hello Vikash, Email reply by unregistered user on 13th August, 2020 4:01 PM. This a test message, please ignore.",
    timestamp: "08/12/2020",
    title: "Vikash Ruhil",
    id: "9",
    sender_uid: "3"
  },
];

export const data1: FeedItem[] = [
  {
    initials: "NR",
    read: true,
    message: "Hello Vikash, Email reply by unregistered user on 13th August, 2020 4:01 PM. This a test message, please ignore.",
    timestamp: "08/12/2020",
    title: "Vikash Ruhil",
    id: "1",
    sender_uid: "1",
  },
  {
    initials: "NR",
    read: false,
    message: "Hello Vikash, Email reply by unregistered user on 13th August, 2020 4:01 PM. This a test message, please ignore.",
    timestamp: "08/12/2020",
    title: "Vikash Ruhil",
    id: "2",
    sender_uid: "1",
  },
  {
    initials: "NR",
    read: true,
    message: "Hello Vikash, Email reply by unregistered user on 13th August, 2020 4:01 PM. This a test message, please ignore.",
    timestamp: "08/12/2020",
    title: "Vikash Ruhil",
    id: "3",
    sender_uid: "1",
  },
  {
    initials: "NR",
    read: false,
    message: "Hello Vikash, Email reply by unregistered user on 13th August, 2020 4:01 PM. This a test message, please ignore.",
    timestamp: "08/12/2020",
    title: "Vikash Ruhil",
    id: "4",
    sender_uid: "1",
  },
  {
    initials: "NR",
    read: false,
    message: "Hello Vikash, Email reply by unregistered user on 13th August, 2020 4:01 PM. This a test message, please ignore.",
    timestamp: "08/12/2020",
    title: "Vikash Ruhil",
    id: "5",
    sender_uid: "1",
  },
  {
    initials: "NR",
    read: false,
    message: "Hello Vikash, Email reply by unregistered user on 13th August, 2020 4:01 PM. This a test message, please ignore.",
    timestamp: "08/12/2020",
    title: "Vikash Ruhil",
    id: "6",
    sender_uid: "1",
  },
  {
    initials: "NR",
    read: false,
    message: "Hello Vikash, Email reply by unregistered user on 13th August, 2020 4:01 PM. This a test message, please ignore.",
    timestamp: "08/12/2020",
    title: "Vikash Ruhil",
    id: "7",
    sender_uid: "1",
  },
  {
    initials: "NR",
    read: false,
    message: "Hello Vikash, Email reply by unregistered user on 13th August, 2020 4:01 PM. This a test message, please ignore.",
    timestamp: "08/12/2020",
    title: "Vikash Ruhil",
    id: "8",
    sender_uid: "1",
  },
  {
    initials: "NR",
    read: false,
    message: "Hello Vikash, Email reply by unregistered user on 13th August, 2020 4:01 PM. This a test message, please ignore.",
    timestamp: "08/12/2020",
    title: "Vikash Ruhil",
    id: "9",
    sender_uid: "1",
  },
];
export const job = {
  job_did: "JD15D35WGQZS41Y2KJG",
  job_title: "Sr, Software Engineer",
  job_location: "Atlanta",
  job_description: "Reprehenderit et esse elit Lorem minim aute duis. Consequat elit ut anim in tempor labore minim cillum. Eiusmod reprehenderit dolore ullamco cillum consectetur. Officia laborum cillum excepteur ex consectetur veniam nostrud elit.",
  cta1_display: true,
  cta1_label: "Job Deatil",
  cta1_link_id: "https://www.careerbuilder.com",
  cta2_display: true,
  cta2_label: "",
  cta2_link_id: "https://www.careerbuilder.com"
}
export const messages: JobMessageModal[] | MsgDataModal[] | EventMessageModal[] = [
  {
    created_time: "08/12/2020",
    text: "Et excepteur nostrud irure ea. Aute minim qui excepteur sunt velit velit anim labore minim mollit sint excepteur sunt do. Sunt cupidatat id tempor dolore aliquip ad reprehenderit sint. Consequat exercitation pariatur non aliqua enim duis Lorem elit consectetur veniam. Nostrud excepteur nulla reprehenderit consectetur. Consectetur ullamco fugiat labore magna mollit et irure laborum est nulla.",
    sender_uid: "1",
    type: "job",
    ...job
  },
  {
    created_time: "08/12/2020",
    text: "Hello",
    sender_uid: "2",
  },
  {
    created_time: "08/12/2020",
    text: "Whatsup",
    sender_uid: "1",
  }
];

export const msgs: MsgDataModal[] = [
  {
    created_time: "08/12/2020",
    text: "hi",
    sender_uid: "1",
  },
  {
    created_time: "08/12/2020",
    text: "Hello",
    sender_uid: "2",
  },
  {
    created_time: "08/12/2020",
    text: "hey there",
    sender_uid: "1",
  },
  {
    created_time: "08/12/2020",
    text: "whats up",
    sender_uid: "2",
  },
  {
    created_time: "08/12/2020",
    text: "all good",
    sender_uid: "1",
  },
  {
    created_time: "08/12/2020",
    text: "hi",
    sender_uid: "1",
  },
  {
    created_time: "08/12/2020",
    text: "Hello",
    sender_uid: "2",
  },
  {
    created_time: "08/12/2020",
    text: "hey there",
    sender_uid: "1",
  },
  {
    created_time: "08/12/2020",
    text: "whats up",
    sender_uid: "2",
  },
  {
    created_time: "08/12/2020",
    text: "all good",
    sender_uid: "1",
  },
  {
    created_time: "08/12/2020",
    text: "hi",
    sender_uid: "1",
  },
  {
    created_time: "08/12/2020",
    text: "Hello",
    sender_uid: "2",
  },
  {
    created_time: "08/12/2020",
    text: "hey there",
    sender_uid: "1",
  },
  {
    created_time: "08/12/2020",
    text: "whats up",
    sender_uid: "2",
  },
  {
    created_time: "08/12/2020",
    text: "all good",
    sender_uid: "1",
  },
  {
    created_time: "08/12/2020",
    text: "hi",
    sender_uid: "1",
  },
  {
    created_time: "08/12/2020",
    text: "Hello",
    sender_uid: "2",
  },
  {
    created_time: "08/12/2020",
    text: "hey there",
    sender_uid: "1",
  },
  {
    created_time: "08/12/2020",
    text: "whats up",
    sender_uid: "2",
  },
  {
    created_time: "08/12/2020",
    text: "all good",
    sender_uid: "1",
  },
  {
    created_time: "08/12/2020",
    text: "hi",
    sender_uid: "1",
  },
  {
    created_time: "08/12/2020",
    text: "Hello",
    sender_uid: "2",
  },
  {
    created_time: "08/12/2020",
    text: "hey there",
    sender_uid: "1",
  },
  {
    created_time: "08/12/2020",
    text: "whats up",
    sender_uid: "2",
  },
  {
    created_time: "08/12/2020",
    text: "all good",
    sender_uid: "1",
  },
  {
    created_time: "08/12/2020",
    text: "hi",
    sender_uid: "1",
  },
  {
    created_time: "08/12/2020",
    text: "Hello",
    sender_uid: "2",
  },
  {
    created_time: "08/12/2020",
    text: "hey there",
    sender_uid: "1",
  },
  {
    created_time: "08/12/2020",
    text: "whats up",
    sender_uid: "2",
  },
  {
    created_time: "08/12/2020",
    text: "all good",
    sender_uid: "1",
  },
];

const msgInputData = {
  name: "new-message",
  value: "",
  label: "Write Your Message here...",
  disabled: true,
  readonly: false,
  error: false
};

export const messengerDataMock: MessengerDataModal = {
  feedItems: data,
  feedSelectedId: "1",
  feedFilters: dropdown,
  msgActions: dropdown,
  currentUserId: "1",
  conversation: messages,
  conversationHeader: {
    initials: 'VR',
    header: 'Vikash Ruhil',
    backgroundColor: 'red',
    info: 'Sr Software Engineer | CareerBuilder.com India Pvt Ltd',
    userActivity: {
      isActive: true,
      lastActive: '1 hour ago'
    }
  },
  newMsgInputData: msgInputData,
  newMsgLoader: false,
  showScrollLoader: true,
  conversationLoader: false,
  showFeedLoader: false,
  noDataMsgFeed: "No conversations",
  noDataMsgCenter: "You do not have any conversations yet",
  event: 'scrollUpEnded',
  config: {
    conversationHeader: {
      hideUserActivity: false,
      isClickable: true
    },
    newMessageInput: {
      hideEmoji: false,
      isResizable: true,
      maxRows: 5,
      minRows: 1,
      stopEnterToSend: false,
      hide: true
    }
  }
};

export const messengerDataMock1: MessengerDataModal = {
  feedItems: data,
  feedSelectedId: "1",
  feedFilters: dropdown,
  msgActions: dropdown,
  currentUserId: "1",
  conversation: [
    {
      'created_time': "08/12/2020",
      'text': "hi",
      'sender_uid': "1",
    }, {
      'created_time': "08/12/2020",
      'text': "hi",
      'sender_uid': "1",
    }, {
      'created_time': "08/12/2020",
      'text': "hi",
      'sender_uid': "1",
    }, {
      'created_time': "08/12/2020",
      'text': "hi",
      'sender_uid': "1",
    }, {
      'created_time': "08/12/2020",
      'text': "hi",
      'sender_uid': "1",
    }, {
      'created_time': "08/12/2020",
      'text': "hi",
      'sender_uid': "1",
    }, {
      'created_time': "08/12/2020",
      'text': "hi",
      'sender_uid': "1",
    }, {
      'created_time': "08/12/2020",
      'text': "hi",
      'sender_uid': "1",
    }, {
      'created_time': "08/12/2020",
      'text': "hi",
      'sender_uid': "1",
    }, {
      'created_time': "08/12/2020",
      'text': "hi",
      'sender_uid': "1",
    }, {
      'created_time': "08/12/2020",
      'text': "hi",
      'sender_uid': "1",
    }, {
      'created_time': "08/12/2020",
      'text': "hi",
      'sender_uid': "1",
    }, {
      'created_time': "08/12/2020",
      'text': "hi",
      'sender_uid': "1",
    }, {
      'created_time': "08/12/2020",
      'text': "hi",
      'sender_uid': "1",
    }, {
      'created_time': "08/12/2020",
      'text': "hi",
      'sender_uid': "1",
    }, {
      'created_time': "08/12/2020",
      'text': "hi",
      'sender_uid': "1",
    }, {
      'created_time': "08/12/2020",
      'text': "hi",
      'sender_uid': "1",
    }, {
      'created_time': "08/12/2020",
      'text': "hi",
      'sender_uid': "1",
    }, {
      'created_time': "08/12/2020",
      'text': "hi",
      'sender_uid': "1",
    }, {
      'created_time': "08/12/2020",
      'text': "hi",
      'sender_uid': "1",
    }, ...msgs
  ],
  conversationHeader: {
    initials: 'VR',
    header: 'Vikash Ruhil',
    backgroundColor: 'red',
    info: 'Sr Software Engineer | CareerBuilder.com India Pvt Ltd',
    userActivity: {
      isActive: true,
      lastActive: '1 hour ago'
    }
  },
  newMsgInputData: msgInputData,
  newMsgLoader: false,
  showScrollLoader: true,
  conversationLoader: false,
  showFeedLoader: true,
  noDataMsgFeed: "No conversations",
  noDataMsgCenter: "You do not have any conversations yet",
  event: 'scrollUpEnded'
};

export const footerData: FooterDataModal = {
  logo: 'https://d1d8tdgb57avhs.cloudfront.net/assets/logos/cb-logo-clue-2b43bf96f6b2375b8ed405070d71678efd66e085f75a70f7eff48365d9307697.png',
  list: [
    {
      title: "Self-Service Reports",
      altTxt: "Self-Service Reports",
      link: "https://recruitment-staging.ace.careerbuilder.com/selfreport",
      newWindow: true,
      isExternal: true,
    },
    {
      title: "Add User",
      altTxt: "Add User",
      link:
        "https://wwwtestemployer.careerbuilder.com/jobposter/accounts/addaccountuser.aspx",
      isExternal: true,
    },
    {
      title: "Manage Users & Licenses",
      altTxt: "Manage Users & Licenses",
      link:
        "https://wwwtestemployer.careerbuilder.com/jobposter/accounts/accountusers.aspx",
      newWindow: true,
      isExternal: true,
    },
    {
      title: "Account Settings",
      altTxt: "Account Settings",
      link:
        "https://wwwtestemployer.careerbuilder.com/jobposte…nts/accountinfo.aspx?Acct_DID=A7F0PT78MTMZ470WBBT",
      newWindow: true,
      isExternal: true,
      emitEvent: true,
    },
    {
      title: "Switch Accounts",
      altTxt: "Switch Accounts",
      link:
        "https://wwwtestemployer.careerbuilder.com/jobposter/accounts/myaccounts.aspx",
      newWindow: true,
      isExternal: true,
      emitEvent: true,
    },
    {
      title: "User Preferences",
      altTxt: "User Preferences",
      link: "https://wwwtestemployer.careerbuilder.com/share/userinfo.aspx",
      newWindow: true,
      isExternal: true,
    },
    {
      title: "Sign Out",
      altTxt: "Sign Out",
      link:
        "https://wwwtestaccounts.careerbuilder.com/share/lo…px?next=http%3a%2f%2fstg.hiring.careerbuilder.com",
      isExternal: true,
    },
  ],
  icons: [
    {
      link: "https://twitter.com/careerbuilder",
      newWindow: true,
      name: "cut-twitter",
    },
    {
      link: "https://www.youtube.com/user/CareerBuilder",
      newWindow: true,
      name: "cut-youtube-play",
    },
    {
      link: "https://www.youtube.com/user/CareerBuilder",
      newWindow: true,
      name: "cut-facebook",
    },
    {
      link: "https://www.pinterest.com/careerbuilder/",
      newWindow: true,
      name: "cut-pinterest-circled",
    },
    {
      link: "https://www.linkedin.com/company/careerbuildercom",
      newWindow: true,
      name: "cut-linkedin-squared",
    }
  ],
};

export const footerWebData: FooterDataModal = {
  logo: 'https://d1d8tdgb57avhs.cloudfront.net/assets/logos/cb-logo-clue-2b43bf96f6b2375b8ed405070d71678efd66e085f75a70f7eff48365d9307697.png',
  tagLine: "200 N. LaSalle St. Suite 1100, Chicago, IL 60601",
  list: [
    {
      id: "menu.requisitions",
      title: "Requisitions",
      list: [
        {
          id: "menu.requisitions.create",
          title: "Create Requisition",
          link:
            "https://php56-sandbox-39.luceosolutions-dev.com/bo.php/poste/dossier?tab=form&new=true&readonly=0",
        },
        {
          id: "menu.requisitions.list",
          title: "All positions",
        },
        {
          id: "menu.job_postings.list",
          title: "Job Postings",
        },
        {
          id: "menu.drafts.list",
          title: "Draft Requisitions",
          link: "https://php56-sandbox-39.luceosolutions-dev.com/bo.php/publication/liste?IDUtilisateur=1",
        },
        {
          id: "menu.requisitions.my",
          title: "My Requisitions",
          link: "https://php56-sandbox-39.luceosolutions-dev.com/bo.php/publication/liste?IDUtilisateur=1",

        },
        {
          id: "menu.job_postings.my",
          title: "My Job Postings",
          link:
            "https://php56-sandbox-39.luceosolutions-dev.com/bo.php/publication/liste?IDUtilisateur=1",
        },
        {
          id: "menu.drafts.my",
          title: "My Drafts",
          link: "https://php56-sandbox-39.luceosolutions-dev.com/bo.php/publication/liste?IDUtilisateur=1",
        },
      ],
    },
    {
      id: "menu.candidates",
      title: "Candidates",
      list: [
        {
          id: "menu.candidates.new",
          title: "New",
          link:
            "https://php56-sandbox-39.luceosolutions-dev.com/bo.php/applicant/folder?chkVivier=1&enter=true",
        },
        {
          id: "menu.candidates.in_progress",
          title: "In Progress",
          link:
            "https://php56-sandbox-39.luceosolutions-dev.com/bo.php/applicant/folder?chkVivier=4&enter=true",
        },
        {
          id: "menu.candidates.internal",
          title: "Hired",
          link:
            "https://php56-sandbox-39.luceosolutions-dev.com/bo.php/applicant/folder?chkVivier=5&enter=true",
        },
        {
          id: "menu.candidates.rejected",
          title: "Applicant Pool",
          link:
            "https://php56-sandbox-39.luceosolutions-dev.com/bo.php/applicant/folder?chkVivier=6&enter=true",
        },
        {
          id: "menu.candidates.archive",
          title: "Applicant Archive",
          link:
            "https://php56-sandbox-39.luceosolutions-dev.com/bo.php/applicant/folder?chkVivier=7&enter=true",
        },
        {
          id: "menu.folders.list",
          title: "Folders",
          link:
            "https://php56-sandbox-39.luceosolutions-dev.com/bo.php/candidat/bannette/edition",
        },
        {
          id: "menu.imports",
          title: "Import Candidates",
          link:
            "https://php56-sandbox-39.luceosolutions-dev.com/bo.php/prehome/import",
        },
      ],
    },
    {
      id: "menu.communications",
      title: "Communications",
      list: [
        {
          id: "menu.communications.candidate",
          title: "Candidates",
          link:
            "https://php56-sandbox-39.luceosolutions-dev.com/bo.php/correspondance_file_attente",
        },
        {
          id: "menu.communications.other",
          title: "Others",
          link:
            "https://php56-sandbox-39.luceosolutions-dev.com/bo.php/correspondance_file_attente?contact=true",
        },
        {
          id: "menu.communications.history",
          title: "Follow up of Candidate Correspondance ",
          link:
            "https://php56-sandbox-39.luceosolutions-dev.com/bo.php/correspondance_file_attente?historique=true",
        },
        {
          id: "menu.mass_mailing.history",
          title: "Mailings Follow up",
          link:
            "https://php56-sandbox-39.luceosolutions-dev.com/bo.php/mailing_historique_lister",
        },
      ],
    },
    {
      id: "menu.reports",
      title: "Reports",
      list: [
        {
          id: "menu.reports.tableau",
          title: "Reports",
          link:
            "https://php56-sandbox-39.luceosolutions-dev.com/bo.php/reporting"
        },
        {
          id: "menu.reports.screeners",
          title: "Screening Questions",
          link:
            "https://php56-sandbox-39.luceosolutions-dev.com/bo.php/statistique?reports=sq"
        },
        {
          id: "menu.reports.advanced_query",
          title: "Advanced Query",
          link:
            "https://php56-sandbox-39.luceosolutions-dev.com/bo.php/requeteur",
        },
        {
          id: "menu.compliance",
          title: "Applicant Reports",
          link: "https://php56-sandbox-39.luceosolutions-dev.com",
        },
        {
          id: "menu.reports.predefined_reports",
          title: "Predefined queries",
          link: "https://php56-sandbox-39.luceosolutions-dev.com",
        },
      ],
    },
  ],
  icons: [
    {
      title: "SEARCH ON THE GO",
      items: [
        {
          link: "https://itunes.apple.com/us/app/jobs-by-careerbuilder/id524123670",
          newWindow: true,
          appIcons: true,
          imagePath: 'https://d1d8tdgb57avhs.cloudfront.net/assets/us/appstore-1008edfd938f80baec0bdd38b972dbee74ad6d3f35f6e03fccb81e0ec3f4c77d.svg',
        },
        {
          link: "https://play.google.com/store/apps/details?id=com.careerbuilder.SugarDrone&hl=en_US",
          newWindow: true,
          appIcons: true,
          imagePath: 'https://d1d8tdgb57avhs.cloudfront.net/assets/us/googleplay-11db10a1f993e5d7e34f0801391ef17d915b74ac2126f81ae1f2b11ea449c4eb.svg',
        }
      ]
    },
    {
      title: "STAY CONNECTED",
      items: [
        {
          link: "https://twitter.com/careerbuilder",
          newWindow: true,
          name: "cut-twitter",
        },
        {
          link: "https://www.youtube.com/user/CareerBuilder",
          newWindow: true,
          name: "cut-youtube-play",
        },
        {
          link: "https://www.youtube.com/user/CareerBuilder",
          newWindow: true,
          name: "cut-facebook",
        },
        {
          link: "https://www.pinterest.com/careerbuilder/",
          newWindow: true,
          name: "cut-pinterest-circled",
        },
        {
          link: "https://www.linkedin.com/company/careerbuildercom",
          newWindow: true,
          name: "cut-linkedin-squared",
        }
      ]
    }
  ],
};

export const stepperMock: Step[] = [
  {
    label: 'Target Audience',
    status: 'complete'
  },
  {
    label: 'Create Message',
    status: 'complete'
  },
  {
    label: 'Schedule',
    status: 'complete'
  },
  {
    label: 'Send',
    status: 'current'
  }
]

export const templateMock: SelectDropDownDataModal[] = [
  {
    id: "2",
    value: "Home",
    title: 'Home'
  },
  {
    id: "1",
    title: "test",
    value: "test",
  },
  {
    id: "3",
    title: "test1",
    value: "test1",
  }
]
export const messageMock: Message = {
  title: 'Send Message',
  body: 'test',
  greeting: 'test',
  templateName: 'test',
  sendSms: false,
  deleteTemplateEnable: true,
  saveTemplateEnable: true,
  isSaveAction: false,
  filterTemplateName: 'test1'
}

export const jobMock: MessageJob = {
  jobTitle: 'Analyste programmmer',
  jobDesc: 'After different tests creating and copying job posts, the behavior observed with the data on network and JSON format of all events starting from “/jobposting/jobdetails” page, and ending on “/jobposting/jobconfirmation” , that save constantly the data',
  companyLocation: 'Careerbuilder - Chicago,IL',
  applyCta: 'www.ca.com',
  detailCta: 'www.ga.com'
}
