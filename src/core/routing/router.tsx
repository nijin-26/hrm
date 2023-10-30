import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { routingConfig } from "./routerConfig.ts";

import { RequireAuth } from "./authRedirect";

export const router = () => {};

// export const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       {routingConfig.public.map((publicRoute) => {
//         const Component = publicRoute.element;
//         return (
//           <Route
//             key={publicRoute.path}
//             path={publicRoute.path}
//             element={<Component />}
//           />
//         );
//       })}
//       {routingConfig.private.map((privateRoute) => {
//         const Component: any = privateRoute.element;
//         return (
//           <Route
//             key={privateRoute.path}
//             path={privateRoute.path}
//             element={
//               <RequireAuth>
//                 <Component />
//               </RequireAuth>
//             }
//           />
//         );
//       })}
//     </>
//   )
// );
