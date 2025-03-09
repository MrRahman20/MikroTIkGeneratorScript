export const generateScript = (template, params) => {
  switch (template.id) {
    case 'load-balancing-pcc': return generateLoadBalancingPCC(params)
    case 'load-balancing-nth': return generateLoadBalancingNTH(params)
    case 'load-balancing-ecmp': return generateLoadBalancingECMP(params)
    case 'failover-recursive': return generateFailoverRecursive(params)
    case 'port-forwarding': return generatePortForwarding(params)
    case 'games-routing-raw': return generateGamesRoutingRaw(params)
    case 'games-routing-mangle': return generateGamesRoutingMangle(params)
    case 'website_routing': return generateWebsiteRouting(params)
    case 'social_routing': return generateSocialMediaRouting(params)
    case 'subnet-calculator':
      return generateSubnetCalculation(params)
    case 'bandwidth-calculator':
      return generateBandwidthCalculation(params)
    case 'port-knocking':
      return generatePortKnocking(params)
    case 'address-list':
      return generateAddressList(params)
    case 'queue-calculator':
      return generateQueueCalculation(params)
    case 'limiter-generator':
      return generateSimpleQueue(params)
    case 'loadbalancing':
      return generateLoadBalancing(params)
    case 'failover':
      return generateFailover(params)
    case 'portforwarding':
      return generatePortForwarding(params)
    case 'static_route':
      return generateStaticRoute(params)
    case 'remote_access':
      return generateRemoteAccess(params)
    default:
      return '# Template not implemented'
  }
}

function generateLoadBalancing(params) {
  const method = params.method?.toLowerCase()
  return `# Load Balancing Configuration (${params.method})
/interface list
add name=WAN
add name=LAN

/interface list member
add interface=${params.isp1} list=WAN
add interface=${params.isp2} list=WAN

/ip route
add dst-address=0.0.0.0/0 gateway=${params.isp1_gateway} check-gateway=ping distance=1
add dst-address=0.0.0.0/0 gateway=${params.isp2_gateway} check-gateway=ping distance=1

${method === 'pcc' ? generatePCCRules(params) : ''}
${method === 'nth' ? generateNTHRules(params) : ''}
${method === 'ecmp' ? generateECMPRules(params) : ''}
`
}

function generatePCCRules(params) {
  return `
/ip firewall mangle
add chain=prerouting in-interface=${params.local_network} dst-address-type=!local per-connection-classifier=both-addresses:2/0 action=mark-routing new-routing-mark=isp1_route
add chain=prerouting in-interface=${params.local_network} dst-address-type=!local per-connection-classifier=both-addresses:2/1 action=mark-routing new-routing-mark=isp2_route`
}

function generateSubnetCalculation(params) {
  // Implementation from buananetpbun's subnet calculator
  return `# Subnet Calculator Result
# Network: ${params.network}
# Netmask: ${params.netmask}
# ...calculation results...`
}

function generateBandwidthCalculation(params) {
  // Implementation from buananetpbun's bandwidth calculator
  const speed = Number(params.speed)
  let result = 0
  switch (params.unit) {
    case 'Kbps': result = speed * 1000; break
    case 'Mbps': result = speed; break
    case 'Bytes/s': result = speed * 125000; break
    case 'KB/s': result = speed * 125; break
    case 'MB/s': result = speed * 0.125; break
  }
  return `# Bandwidth Conversion Result
# ${speed} Mbps equals:
# ${result} ${params.unit}`
}

function generateLoadBalancingPCC(params) {
  return `# Load Balancing PCC by Ruhiyatna Rahman
# https://github.com/MrRahman20

/ip firewall nat
add chain=srcnat out-interface=${params.isp1_interface} action=masquerade
add chain=srcnat out-interface=${params.isp2_interface} action=masquerade

/ip route
add check-gateway=ping distance=1 gateway=${params.isp1_gateway} routing-mark=${params.isp1_name}_route
add check-gateway=ping distance=1 gateway=${params.isp2_gateway} routing-mark=${params.isp2_name}_route
add check-gateway=ping distance=1 gateway=${params.isp1_gateway}
add check-gateway=ping distance=2 gateway=${params.isp2_gateway}

/ip firewall mangle
add action=mark-connection chain=input in-interface=${params.isp1_interface} new-connection-mark=${params.isp1_name}_conn
add action=mark-connection chain=input in-interface=${params.isp2_interface} new-connection-mark=${params.isp2_name}_conn
add action=mark-routing chain=output connection-mark=${params.isp1_name}_conn new-routing-mark=${params.isp1_name}_route
add action=mark-routing chain=output connection-mark=${params.isp2_name}_conn new-routing-mark=${params.isp2_name}_route

# Load Balancing PCC
add action=mark-connection chain=prerouting dst-address-type=!local in-interface=${params.local_interface} new-connection-mark=${params.isp1_name}_conn per-connection-classifier=both-addresses:2/0
add action=mark-connection chain=prerouting dst-address-type=!local in-interface=${params.local_interface} new-connection-mark=${params.isp2_name}_conn per-connection-classifier=both-addresses:2/1
add action=mark-routing chain=prerouting connection-mark=${params.isp1_name}_conn in-interface=${params.local_interface} new-routing-mark=${params.isp1_name}_route
add action=mark-routing chain=prerouting connection-mark=${params.isp2_name}_conn in-interface=${params.local_interface} new-routing-mark=${params.isp2_name}_route

${params.use_connection_bytes ? `
# Connection Bytes
add action=mark-connection chain=forward new-connection-mark=${params.isp1_name}_conn passthrough=yes per-connection-classifier=both-addresses:2/0 src-address=${params.local_address}
add action=mark-connection chain=forward new-connection-mark=${params.isp2_name}_conn passthrough=yes per-connection-classifier=both-addresses:2/1 src-address=${params.local_address}` : ''}

${params.use_hotspot ? `
# Hotspot Users
add action=mark-connection chain=prerouting dst-address-type=!local new-connection-mark=${params.isp1_name}_conn passthrough=yes per-connection-classifier=both-addresses:2/0 src-address-list=Hotspot_users
add action=mark-connection chain=prerouting dst-address-type=!local new-connection-mark=${params.isp2_name}_conn passthrough=yes per-connection-classifier=both-addresses:2/1 src-address-list=Hotspot_users` : ''}

# Address Lists
/ip firewall address-list
add address=${params.local_address} list=LOCAL_NETWORK

# IP Settings
/ip address
add address=${params.isp1_address} interface=${params.isp1_interface}
add address=${params.isp2_address} interface=${params.isp2_interface}
`
}

// Add other generator functions...
// generatePortForwarding, generateLoadBalancingNTH, etc.
