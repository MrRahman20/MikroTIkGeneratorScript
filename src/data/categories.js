export const scriptCategories = [
  {
    id: 'routing',
    name: 'ROUTE / MANGLE / NAT / VPN',
    templates: [
      {
        id: 'load-balancing-pcc',
        name: 'Load Balancing PCC',
        parameters: [
          { 
            id: 'wan_lines', 
            name: 'Line WAN ISP', 
            type: 'select',
            options: [
              '2 Line WAN ISP',
              '3 Line WAN ISP',
              '4 Line WAN ISP',
              '5 Line WAN ISP',
              '6 Line WAN ISP'
            ]
          },
          { 
            id: 'ros_version', 
            name: 'RouterOS Version', 
            type: 'select',
            options: ['RouterOS v6.xx', 'RouterOS v7.xx']
          },
          {
            id: 'local_target',
            name: 'Local Target',
            type: 'select',
            options: [
              'IP Address List',
              'In. Interface',
              'In. Interface List'
            ]
          },
          { 
            id: 'interface_target', 
            name: 'Interface Target', 
            type: 'text', 
            placeholder: 'LOCAL-IP (RFC1819)' 
          },
          // ISP 1
          { id: 'wan1_isp', name: 'WAN ISP-1', type: 'text', placeholder: 'Ex: ether1' },
          { id: 'wan1_gateway', name: 'Gateway ISP-1', type: 'text', placeholder: 'Ex: 192.168.1.1' },
          // ISP 2
          { id: 'wan2_isp', name: 'WAN ISP-2', type: 'text', placeholder: 'Ex: ether2' },
          { id: 'wan2_gateway', name: 'Gateway ISP-2', type: 'text', placeholder: 'Ex: 192.168.2.1' },
          // ISP 3
          { id: 'wan3_isp', name: 'WAN ISP-3', type: 'text', placeholder: 'Ex: ether3' },
          { id: 'wan3_gateway', name: 'Gateway ISP-3', type: 'text', placeholder: 'Ex: 192.168.3.1' },
          // ISP 4
          { id: 'wan4_isp', name: 'WAN ISP-4', type: 'text', placeholder: 'Ex: ether4' },
          { id: 'wan4_gateway', name: 'Gateway ISP-4', type: 'text', placeholder: 'Ex: 192.168.4.1' },
          // ISP 5
          { id: 'wan5_isp', name: 'WAN ISP-5', type: 'text', placeholder: 'Ex: ether5' },
          { id: 'wan5_gateway', name: 'Gateway ISP-5', type: 'text', placeholder: 'Ex: 192.168.5.1' },
          // ISP 6
          { id: 'wan6_isp', name: 'WAN ISP-6', type: 'text', placeholder: 'Ex: ether6' },
          { id: 'wan6_gateway', name: 'Gateway ISP-6', type: 'text', placeholder: 'Ex: 192.168.6.1' }
        ]
      },
      {
        id: 'load-balancing-nth',
        name: 'Load Balancing NTH',
        parameters: [
          { id: 'isp1_interface', name: 'ISP1 Interface', type: 'text' },
          { id: 'isp1_gateway', name: 'ISP1 Gateway', type: 'text' },
          { id: 'isp2_interface', name: 'ISP2 Interface', type: 'text' },
          { id: 'isp2_gateway', name: 'ISP2 Gateway', type: 'text' }
        ]
      },
      {
        id: 'load-balancing-ecmp',
        name: 'Load Balancing ECMP',
        parameters: [
          { id: 'interfaces', name: 'ISP Interfaces', type: 'text', placeholder: 'ether1,ether2' },
          { id: 'gateways', name: 'ISP Gateways', type: 'text', placeholder: '192.168.1.1,192.168.2.1' }
        ]
      },
      {
        id: 'failover-recursive',
        name: 'Failover Recursive Gateway',
        parameters: [
          { id: 'main_interface', name: 'Main Interface', type: 'text' },
          { id: 'backup_interface', name: 'Backup Interface', type: 'text' },
          { id: 'check_gateway', name: 'Check Gateway', type: 'text', default: '8.8.8.8' }
        ]
      },
      {
        id: 'failover',
        name: 'Failover Recursive Gateway',
        parameters: [
          { id: 'main_isp', name: 'Main ISP Interface', type: 'text' },
          { id: 'backup_isp', name: 'Backup ISP Interface', type: 'text' },
          { id: 'main_gateway', name: 'Main Gateway', type: 'text' },
          { id: 'backup_gateway', name: 'Backup Gateway', type: 'text' },
          { id: 'check_interval', name: 'Check Interval', type: 'select',
            options: ['5s', '10s', '15s', '30s'] }
        ]
      },
      {
        id: 'portforwarding',
        name: 'Port Forwarding NAT',
        parameters: [
          { id: 'external_port', name: 'External Port', type: 'number' },
          { id: 'internal_ip', name: 'Internal IP', type: 'text' },
          { id: 'internal_port', name: 'Internal Port', type: 'number' },
          { id: 'protocol', name: 'Protocol', type: 'select',
            options: ['tcp', 'udp', 'both'] }
        ]
      },
      {
        id: 'static_route',
        name: 'Static Routing Game & VPN',
        parameters: [
          { id: 'game_network', name: 'Game Network', type: 'text' },
          { id: 'via_gateway', name: 'Via Gateway', type: 'text' },
          { id: 'distance', name: 'Distance', type: 'number', default: 1 },
          { id: 'mark_connection', name: 'Mark Connection', type: 'checkbox' }
        ]
      },
      {
        id: 'remote_access',
        name: 'Remote Access ISP',
        parameters: [
          { id: 'public_ip', name: 'Public IP', type: 'text' },
          { id: 'allowed_ports', name: 'Allowed Ports', type: 'text', 
            placeholder: '8291,80,443' },
          { id: 'allowed_addresses', name: 'Allowed Addresses', type: 'text',
            placeholder: '8.8.8.8,1.1.1.1' }
        ]
      },
      {
        id: 'port_forwarding',
        name: 'Port Forwarding with NAT',
        parameters: [
          { id: 'wan_interface', name: 'WAN Interface', type: 'text' },
          { id: 'external_port', name: 'External Port', type: 'text' },
          { id: 'internal_ip', name: 'Internal IP', type: 'text' },
          { id: 'internal_port', name: 'Internal Port', type: 'text' },
          { id: 'protocol', name: 'Protocol', type: 'select', options: ['tcp', 'udp', 'both'] }
        ]
      },
      {
        id: 'games_raw',
        name: 'Games Static Routing (Raw)',
        parameters: [
          { id: 'game_ports', name: 'Game Ports (comma-separated)', type: 'text', placeholder: '4000,5000-5500,6000' },
          { id: 'gateway', name: 'Gateway', type: 'text' },
          { id: 'interface', name: 'Interface', type: 'text' }
        ]
      },
      {
        id: 'games_mangle',
        name: 'Games Static Routing (Mangle)',
        parameters: [
          { id: 'game_ports', name: 'Game Ports', type: 'text' },
          { id: 'gateway', name: 'Gateway', type: 'text' },
          { id: 'mark_connection', name: 'Connection Mark', type: 'text' }
        ]
      },
      {
        id: 'website_routing',
        name: 'Website Static Routing',
        parameters: [
          { id: 'domain_list', name: 'Domain List', type: 'text', placeholder: 'example.com, website.com' },
          { id: 'gateway', name: 'Gateway', type: 'text' },
          { id: 'dns_server', name: 'DNS Server', type: 'text', default: '8.8.8.8' }
        ]
      },
      {
        id: 'social_routing',
        name: 'Social Media Static Routing',
        parameters: [
          { id: 'services', name: 'Services', type: 'select', 
            options: ['Youtube', 'Facebook', 'TikTok', 'WhatsApp'], multiple: true },
          { id: 'gateway', name: 'Gateway', type: 'text' },
          { id: 'add_layer7', name: 'Add Layer-7 Rules', type: 'checkbox' }
        ]
      }
    ]
  },
  {
    id: 'basic-tools',
    name: 'BASIC TOOLS',
    templates: [
      {
        id: 'subnet-calculator',
        name: 'IP Subnet Calculator',
        parameters: [
          { id: 'network', name: 'Network Address', type: 'text', placeholder: '192.168.1.0' },
          { id: 'netmask', name: 'Netmask', type: 'text', placeholder: '255.255.255.0' }
        ]
      },
      {
        id: 'bandwidth-calculator',
        name: 'Bandwidth Calculator',
        parameters: [
          { id: 'speed', name: 'Speed (Mbps)', type: 'number' },
          { id: 'unit', name: 'Convert To', type: 'select', 
            options: ['Kbps', 'Mbps', 'Bytes/s', 'KB/s', 'MB/s'] }
        ]
      }
    ]
  },
  {
    id: 'firewall',
    name: 'FIREWALL TOOLS',
    templates: [
      {
        id: 'port-knocking',
        name: 'Port Knocking Generator',
        parameters: [
          { id: 'ports', name: 'Knock Ports', type: 'text', placeholder: '1000,2000,3000' },
          { id: 'open_port', name: 'Port to Open', type: 'number' },
          { id: 'timeout', name: 'Timeout', type: 'number', default: 10 }
        ]
      },
      {
        id: 'address-list',
        name: 'Address List Maker',
        parameters: [
          { id: 'list_name', name: 'List Name', type: 'text' },
          { id: 'addresses', name: 'IP Addresses', type: 'text', 
            placeholder: 'One IP per line' }
        ]
      }
    ]
  },
  {
    id: 'qos',
    name: 'QOS TOOLS',
    templates: [
      {
        id: 'queue-calculator',
        name: 'Queue Speed Calculator',
        parameters: [
          { id: 'max_limit', name: 'Max Limit', type: 'text', placeholder: '1M/512K' },
          { id: 'burst_limit', name: 'Burst Speed %', type: 'number', default: 150 }
        ]
      },
      {
        id: 'limiter-generator',
        name: 'Simple Queue Generator',
        parameters: [
          { id: 'name', name: 'Name Pattern', type: 'text' },
          { id: 'target', name: 'Target Pattern', type: 'text' },
          { id: 'upload', name: 'Upload Speed', type: 'text' },
          { id: 'download', name: 'Download Speed', type: 'text' }
        ]
      }
    ]
  },
  {
    id: 'queue',
    name: 'SIMPLE QUEUE / QUEUE TREE / QUEUE TYPE',
    templates: [
      {
        id: 'burst_calculator',
        name: 'Burst Limit Calculator',
        parameters: [
          { id: 'base_speed', name: 'Base Speed (Mbps)', type: 'number' },
          { id: 'burst_time', name: 'Burst Time (s)', type: 'number', default: 15 },
          { id: 'burst_threshold', name: 'Burst Threshold (%)', type: 'number', default: 80 },
          { id: 'burst_limit', name: 'Burst Limit (%)', type: 'number', default: 150 }
        ]
      },
      {
        id: 'pcq_queue',
        name: 'PCQ for Queue Tree & Simple Queue',
        parameters: [
          { id: 'interface', name: 'Interface', type: 'text' },
          { id: 'max_limit', name: 'Max Limit', type: 'text', placeholder: '1M/512K' },
          { id: 'pcq_rate', name: 'PCQ Rate', type: 'text', placeholder: '128K' },
          { id: 'pcq_classifier', name: 'PCQ Classifier', type: 'select', 
            options: ['src-address', 'dst-address', 'both-addresses'] }
        ]
      },
      {
        id: 'qos_priority',
        name: 'QoS Priority Social Media',
        parameters: [
          { id: 'interface', name: 'Interface', type: 'text' },
          { id: 'youtube_priority', name: 'YouTube Priority', type: 'select', 
            options: ['1', '2', '3', '4', '5', '6', '7', '8'] },
          { id: 'social_priority', name: 'Social Media Priority', type: 'select',
            options: ['1', '2', '3', '4', '5', '6', '7', '8'] }
        ]
      }
    ]
  },
  {
    id: 'hotspot',
    name: 'HOTSPOT / PPPOE / PPP',
    templates: [
      {
        id: 'hotspot_qr',
        name: 'Hotspot QR Code Generator',
        parameters: [
          { id: 'ssid', name: 'SSID', type: 'text' },
          { id: 'password', name: 'Password', type: 'text' },
          { id: 'dns_name', name: 'DNS Name', type: 'text' },
          { id: 'login_method', name: 'Login Method', type: 'select',
            options: ['password', 'mac-cookie', 'trial'] }
        ]
      },
      {
        id: 'hotspot_wizard',
        name: 'Easy Hotspot Wizard',
        parameters: [
          { id: 'interface', name: 'Interface', type: 'text' },
          { id: 'network', name: 'Network', type: 'text', placeholder: '192.168.10.0/24' },
          { id: 'dns_name', name: 'DNS Name', type: 'text' },
          { id: 'profile_name', name: 'Profile Name', type: 'text' }
        ]
      },
      {
        id: 'ppp_generator',
        name: 'PPP Secrets & User Generator',
        parameters: [
          { id: 'prefix', name: 'Username Prefix', type: 'text' },
          { id: 'count', name: 'Number of Users', type: 'number' },
          { id: 'profile', name: 'Profile', type: 'text' },
          { id: 'service', name: 'Service', type: 'select',
            options: ['pppoe', 'hotspot', 'ovpn'] }
        ]
      }
    ]
  },
  {
    id: 'dns',
    name: 'DNS / NETWATCH / INTERFACE / DHCP',
    templates: [
      {
        id: 'doh_setup',
        name: 'DNS over HTTPS (DoH) Setup',
        parameters: [
          { id: 'doh_server', name: 'DoH Server', type: 'select',
            options: ['cloudflare', 'google', 'quad9'] },
          { id: 'local_dns', name: 'Local DNS Cache', type: 'checkbox' },
          { id: 'allow_remote', name: 'Allow Remote Requests', type: 'checkbox' }
        ]
      },
      {
        id: 'netwatch_notify',
        name: 'Netwatch Notifications',
        parameters: [
          { id: 'host', name: 'Host to Monitor', type: 'text' },
          { id: 'notification', name: 'Notification Type', type: 'select',
            options: ['telegram', 'email', 'whatsapp'] },
          { id: 'token', name: 'Bot Token/Email', type: 'text' },
          { id: 'chat_id', name: 'Chat ID/Email Address', type: 'text' }
        ]
      },
      {
        id: 'mac_randomizer',
        name: 'Random MAC Address Interface',
        parameters: [
          { id: 'interface', name: 'Interface', type: 'text' },
          { id: 'vendor_id', name: 'Vendor ID (Optional)', type: 'text' },
          { id: 'change_interval', name: 'Change Interval', type: 'select',
            options: ['startup', '1h', '12h', '24h'] }
        ]
      }
    ]
  },
  {
    id: 'protection',
    name: 'PROTECTION / BLOCK / BACKUP',
    templates: [
      {
        id: 'ninja_mode',
        name: 'MikroTik Ninja Mode',
        parameters: [
          { id: 'hide_identity', name: 'Hide Identity', type: 'checkbox' },
          { id: 'stealth_mode', name: 'Stealth Mode', type: 'checkbox' },
          { id: 'secure_ports', name: 'Secure Ports', type: 'text', 
            placeholder: '8291,8728,80,443' }
        ]
      },
      {
        id: 'advanced_firewall',
        name: 'Advanced MikroTik Firewall',
        parameters: [
          { id: 'protection_level', name: 'Protection Level', type: 'select',
            options: ['basic', 'medium', 'high', 'extreme'] },
          { id: 'allowed_countries', name: 'Allowed Countries', type: 'text' },
          { id: 'block_lists', name: 'Enable Block Lists', type: 'checkbox' }
        ]
      },
      {
        id: 'auto_backup',
        name: 'Auto Backup to Email',
        parameters: [
          { id: 'email', name: 'Email Address', type: 'text' },
          { id: 'interval', name: 'Backup Interval', type: 'select',
            options: ['daily', 'weekly', 'monthly'] },
          { id: 'include_sensitive', name: 'Include Sensitive Data', type: 'checkbox' },
          { id: 'password', name: 'Backup Password', type: 'text' }
        ]
      }
    ]
  }
]
