export interface Project {
  title: string
  description: string
  link: string
  tags: string[]
}

export const projects: Project[] = [
  {
    title: 'ShiftBoard',
    description: 'A weight-sensing electric skateboard.',
    link: '/posts/shiftboard',
    tags: ['Eagle CAD', 'C Programming', 'Load Cells', 'Speed Controllers'],
  },
  {
    title: 'Underwater Robot Build',
    description: '5 day underwater robot build for MATE ROV.',
    link: '/posts/5-day-underwater-robot-build',
    tags: ['Robotics', 'Python', 'OpenCV', 'Machine Learning'],
  },
  {
    title: 'Dual Bidirectional Bus Buffer',
    description: 'Dual Bidirectional I2C Bus and SMBus Repeater PCB.',
    link: '/posts/dual-bidirectional-bus-buffer',
    tags: ['Eagle CAD', 'PCB Design', 'I2C Communication'],
  },
  {
    title: 'Python Keylogger',
    description: 'Python keylogger program.',
    link: '/posts/python-keylogger',
    tags: ['Python'],
  },
  {
    title: 'Twitter Bot',
    description: 'Twitter bot built with Selenium.',
    link: '/posts/twitter-bot',
    tags: ['Python', 'Selenium'],
  },
  {
    title: 'File Organizer',
    description: 'Windows file organizer.',
    link: '/posts/powershell-automation-organizing-files',
    tags: ['Powershell'],
  },
  {
    title: 'Project Hifi',
    description: 'Design and built large scale network.',
    link: '/posts/project-hifi-managing-a-network',
    tags: ['Ubiquiti', 'Unifi', 'Network Engineering'],
  },
  {
    title: 'Raspberry Pi Robot',
    description: 'Build a robot powered by a Raspberry Pi with tutorial.',
    link: 'https://github.com/DexterDixon/Rasberry-Pi-Robot/wiki',
    tags: ['Python', 'OpenCV', 'Robotics'],
  },
  {
    title: 'Port Scanner',
    description: 'Port Scanner built with Python.',
    link: 'https://github.com/DexterDixon/PortScanner',
    tags: ['Python', 'Networking'],
  },
  {
    title: 'Movie Inventory Program',
    description: 'A Movie inventory system made while learning C.',
    link: 'https://github.com/DexterDixon/Movie-Inventory-System',
    tags: ['C Programming Language'],
  },
  {
    title: 'Hall Effect Sensor',
    description: 'A simple Hall Effect sensor that can be used with Arduino.',
    link: 'https://github.com/DexterDixon/Hall_Sensor',
    tags: ['Eagle CAD', 'PCB', 'Hall Effect Sensor'],
  },
  {
    title: 'DJI Drone Program',
    description: 'Python code for controlling DJI Tello drone and Parrot Bebop drone.',
    link: 'https://github.com/DexterDixon/TechGarage-Drone',
    tags: ['Python', 'Drone'],
  },
  {
    title: 'AR and VR App Development',
    description: 'Taught Development of AR and VR applications in Unity.',
    link: 'https://github.com/DexterDixon/Unity-Scripts',
    tags: ['Unity', 'C#', 'AR', 'VR'],
  },
  {
    title: 'Kafka Testing CLI',
    description: 'A Go CLI program for testing Kafka.',
    link: 'https://github.com/DexterDixon/go-stuff/tree/main/msg-util',
    tags: ['Go', 'Kafka'],
  },
  {
    title: 'Laptop Keyboard Replacement',
    description: 'Replacing the keyboard for a Lenova laptop.',
    link: 'https://youtu.be/kJdDsjdQidY?si=zU-fsMq8Zp9gqxho',
    tags: ['PC Repair'],
  },
  {
    title: 'Macbook Data Recovery',
    description: 'Recovering Data from a broken Macbook.',
    link: 'https://youtu.be/jcNWngypaO8?si=4E6PBLauBzCWdn2C',
    tags: ['PC Repair'],
  },
  {
    title: 'Raspberry Pi Tutorial 1',
    description: 'Raspberry Pi tutorial imaging the SD Card.',
    link: 'https://youtu.be/tqLcMdNlc-c?si=ES4vnZajacQpcQGb',
    tags: ['Raspberry Pi'],
  },
  {
    title: 'Raspberry Pi Tutorial 2',
    description: 'Raspberry Pi tutorial imaging the SD Card.',
    link: 'https://youtu.be/S7DJbzAFXOM?si=ElKtMJBPNwmJjgBL',
    tags: ['Raspberry Pi', 'Bash', 'Linux'],
  },
]
