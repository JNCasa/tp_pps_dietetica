import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import PagesRoutes from "../src/PagesRoutes";


describe('Testeo de Pages (rutas)', () => {

    test('Debe mostrar Store', () => {
      
        render(
                <MemoryRouter>
                    <PagesRoutes/>
                </MemoryRouter>    
        )

        expect( screen.getByText('Store') ).toBeTruthy();

    });

    // test('Debe mostrar LogIn', () => {
      
       

    //     expect( screen.getByText('LogIn') ).toBeTruthy();

    // });
    
  
});
