import { countClientsMatching } from "../search";
import * as ClientsModule from "../clients"

describe('countClientsMatching  tests', () => {
    test('should return 0 when 0 out of 2 clients match', () => {

        jest.spyOn(ClientsModule, 'requestClients').mockReturnValue(
            [
                {
                    id: 1,
                    name: "Maria Brown",
                },
                {
                    id: 2,
                    name: "Carlos Barros",
                },
            ]
        )

        const result = countClientsMatching("silva");

        expect(result).toEqual(0);
    });


    test("should return 2 when 2 out of 4 clients match", () => {

        jest.spyOn(ClientsModule, "requestClients").mockReturnValue([
          {
            id: 1,
            name: "Maria Silva",
          },
          {
            id: 2,
            name: "Ana Carla",
          },
          {
            id: 3,
            name: "Carlos Silva Ramos",
          },
          {
            id: 4,
            name: "Claudia Silveira",
          },
        ]);
    
        const result = countClientsMatching("Silva");
    
        expect(result).toEqual(2);
      });

});