export const engineFamilies = [
  { id: 'hemi-57', label: 'HEMI 5.7L', years: '2003–الآن', query: 'HEMI 5.7' },
  { id: 'hemi-64', label: 'HEMI 6.4L / 392', years: '2011–الآن', query: 'HEMI 6.4' },
  { id: 'ls-gen3', label: 'GM LS Gen III', years: '1997–2007', query: 'LS Gen III' },
  { id: 'ls-gen4', label: 'GM LS Gen IV', years: '2005–2017', query: 'LS Gen IV' },
  { id: 'lt-gen5', label: 'GM LT Gen V', years: '2014–الآن', query: 'LT Gen V' },
  { id: 'coyote', label: 'Ford Coyote 5.0L', years: '2011–الآن', query: 'Coyote 5.0' },
  { id: 'godzilla', label: 'Ford Godzilla 7.3L', years: '2020–الآن', query: 'Godzilla 7.3' },
  { id: 'toyota-1fz', label: 'Toyota 1FZ-FE', years: '1993–2007', query: '1FZ-FE' },
  { id: 'toyota-2jz', label: 'Toyota 2JZ', years: '1991–2007', query: '2JZ' },
] as const;

export const vehicleGroups = [
  { make: 'Dodge / Ram / Jeep', models: ['Charger', 'Challenger', 'Ram 1500', 'Ram 2500', 'Durango', 'Grand Cherokee'] },
  { make: 'Chevrolet / GMC', models: ['Silverado', 'Sierra', 'Tahoe', 'Yukon', 'Camaro', 'Corvette', 'Caprice'] },
  { make: 'Ford', models: ['Mustang', 'F-150', 'Raptor', 'Super Duty'] },
  { make: 'Toyota / Lexus', models: ['Land Cruiser', 'Supra', 'Lexus IS / GS'] },
] as const;

export const categories = [
  { icon: '⚙', title: 'كامات ورافعات', subtitle: 'Camshafts & Lifters', query: 'camshaft lifters' },
  { icon: '▦', title: 'أطقم إلغاء MDS / AFM', subtitle: 'Delete Kits', query: 'MDS AFM delete kit' },
  { icon: '◉', title: 'رؤوس المحركات', subtitle: 'Cylinder Heads', query: 'cylinder heads' },
  { icon: '⌁', title: 'السحب والهواء', subtitle: 'Intakes & Filters', query: 'cold air intake' },
  { icon: '✦', title: 'التيربو والسوبرتشارجر', subtitle: 'Forced Induction', query: 'turbo supercharger' },
  { icon: '⛓', title: 'التايمن والمحركات', subtitle: 'Timing & Engine Parts', query: 'timing engine parts' },
  { icon: '⬡', title: 'البساتم والكرنك', subtitle: 'Rotating Assembly', query: 'pistons rotating assembly' },
  { icon: 'ϟ', title: 'الوقود والاشتعال', subtitle: 'Fuel & Ignition', query: 'fuel ignition' },
  { icon: '≈', title: 'العادم والهدرز', subtitle: 'Exhaust', query: 'exhaust headers' },
  { icon: '◫', title: 'القير ونقل الحركة', subtitle: 'Transmission', query: 'transmission' },
  { icon: '⌖', title: 'التعليق والثبات', subtitle: 'Suspension', query: 'suspension' },
  { icon: '⌕', title: 'البرمجة والعدادات', subtitle: 'Tuning & Gauges', query: 'tuning gauges' },
] as const;

export const brands = [
  'AFE Power', 'Air Lift', 'ARP', 'Brian Tooley Racing', 'Comp Cams',
  'Dart Machinery', 'DiabloSport', 'Eagle', 'Enginetech', 'FAST',
  'Fuel Injector Clinic', 'Holley', 'Melling', 'Mopar', 'NOS',
  'PAC Racing Springs', 'Point One', 'Stainless Works', 'Texas Speed', 'VCM Performance',
] as const;
