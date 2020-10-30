export default {
  description: 'A permissions plugin for Minecraft servers.',
  close: 'Close',
  copy: 'Copy',
  wiki: 'Wiki',
  links: {
    home: 'Home',
    download: 'Download',
    editor: 'Web Editor',
    verbose: 'Verbose Viewer',
    tree: 'Tree Viewer',
    wiki: 'Wiki',
    tools: {
      name: 'Tools',
      editor: 'Editor',
      verbose: 'Verbose',
      tree: 'Tree',
    },
  },
  home: {
    name: 'Home',
    supported: 'Supports Bukkit/Spigot/Paper, BungeeCord, Sponge, Nukkit and Velocity servers',
    why: 'Why LuckPerms?',
    description: 'LuckPerms is a permissions plugin for Minecraft servers. It allows server admins to control what features players can use by creating groups and assigning permissions.',
    apps: 'Web Apps',
    appsDescription1: 'This site hosts a number of extra web applications which work with the plugin.',
    appsDescription2: 'These applications are designed to work for all users, even those without the ability to install/host an application on their own web server.',
    wiki: 'Learn how to install, setup, configure and effectively use LuckPerms',
    github: 'Browse the source code, report issues and contribute to the project',
    discord: 'Join {count} others to discuss the project and ask/answer questions',
    patreon: 'Join {count} others supporting the project on Patreon',
  },
  download: {
    title: 'Download LuckPerms',
    version: 'Current version: {version}',
    typeHelp: 'Not sure wich type?',
    typeChoose: 'Choose your server type',
    extensions: {
      title: 'Extensions',
      legacy: 'Legacy API Extension',
      legacyInfo: 'Allows some common API methods to be used by plugins that haven\'t upgraded to v5 version of the api yet.',
      defaultAssignments: 'Default Assignments Extension',
    },
  },
  editor: {
    description: 'Web Permissions Editor',
    demo: 'View Demo',
    start: 'To start a new editor session, use one of the following commands:',
    loading: 'Loading data...',
    permissions: 'Permissions',
    value: 'Value',
    expiry: 'Expiry',
    contexts: 'Contexts',
    add: 'Add',
    copy: 'Copy',
    move: 'Move',
    replace: 'Replace',
    delete: 'Delete',
    cancel: 'Cancel',
    update: 'Update',
    save: 'Save',
    saving: 'Saving...',
    saved: 'Data was saved!',
    command: 'Run this command on your server to apply the changes:',
    copied: 'Command copied to clipboard',
    nav: {
      tracks: 'Tracks',
      groups: 'Groups',
      users: 'Users',
    },
    groups: {
      create: 'Create a group',
      name: 'Group name',
      choose: 'Choose a group or user from the side bar',
      deleteConfirm: 'All {count} of its permissions will be deleted. This currently can not be undone.',
      displayName: 'Display name',
      parent: 'Parent',
      weight: 'Weight',
      prefix: 'Prefix',
      suffix: 'Suffix',
      add: 'Add group',
      none: 'None',
    },
    users: {
      deleteConfirm: 'All {count} of its permissions will be deleted. This currently can not be undone.',
    },
    nodes: {
      copy: 'Copy {count} node to... | Copy {count} nodes to...',
      move: 'Move {count} node to... | Move {count} nodes to...',
      delete: 'Delete {count} node? | Delete {count} nodes?',
      deleteConfirm: 'Are you sure you want to delete {count} permission node? | Are you sure you want to delete {count} permission nodes?',
    },
    tracks: {
      create: 'Create a track',
      groups: 'Groups',
      tip: 'Tip: click and drag to re-order the track',
      addGroups: 'Add groups',
      edit: 'Edit a track',
      name: 'Track name',
      add: 'Add track',
      save: 'Save track',
    },
  },
  tree: {
    title: 'Permission Tree Viewer',
    generate: 'To generate a permission tree, do the following in game or from the console:',
    generateCommand: '/lp tree [scope] [player]',
    generateUrl: 'Follow the URL that is generated',
    uploaded: 'Uploaded by',
    user: 'Reference user',
    time: 'Time',
    started: 'When the recording started',
    expand: 'Expand',
    collapse: 'Collapse',
  },
  verbose: {
    title: 'Verbose viewer',
    uploaded: 'Uploaded by',
    start: 'Start time',
    started: 'When the recording started',
    end: 'End time',
    ended: 'When the recording ended',
    duration: 'Duration',
    recording: 'How long the plugin was recording for',
    count: 'Count',
    values: 'How many values matched and how many checks were made in total',
    filter: 'Filter',
    filterDesc: 'The string used to filter the output',
    truncated: 'Truncated',
    truncatedDesc: 'If the data was truncated (limited in size) when uploaded',
    filterPlaceholder: 'Enter filter here',
    context: 'Context',
    origin: 'Origin',
    processor: 'Processor',
    cause: 'Cause',
    thread: 'Thread',
    trace: 'Trace',
  },
  quiz: {
    choose: 'Do you run a single server, or a network?',
    single: 'Single server',
    network: 'Network of servers',
    type: 'What type of server are you running?',
    note: 'Note: LuckPerms is still required on all backend servers.',
    version: 'What version of {serverType} are you running?',
    older: '{version} or older',
    newer: '{version} or newer',
    result: 'You need LuckPerms for {serverType}',
    travertine: 'Your version of BungeeCord is not supported, consider switching to Travertine if you want to use LuckPerms.',
    outdated: 'Your version of {serverType} is not supported, you must upgrade if you want to use LuckPerms.',
  },
  notFound: {
    title: 'Not found!',
  },
};
