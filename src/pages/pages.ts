// The page the user lands on after opening the app and without a session
let skip = localStorage.getItem('skip');
export const FirstRunPage = skip=='true' ? 'TabsPage': 'TutorialPage';
localStorage.setItem('datas','[{"profilePic":"","name":"206","about":"Behnam","Fuels":[{"name":"normal","location":"ghalandar","date":"ghable eyd","Kilometre":"199000"},{"name":"normal","location":"pido","date":"dirooz","Kilometre":"199100"}]},{"profilePic":"","name":"besturn","about":"yegane","Fuels":[{"name":"super","location":"jordan","date":"yemah pish","Kilometre":"20000"},{"name":"mamuli","location":"pido","date":"ye hafte pish","Kilometre":"20100"}]},{"profilePic":"","name":"samand","about":"baba"}]');
// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
export const MainPage = 'TabsPage';


// The initial root pages for our tabs (remove if not using tabs)
export const Tab1Root = 'ListMasterPage';
export const Tab2Root = 'SearchPage';
export const Tab3Root = 'SettingsPage';
