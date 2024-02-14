

class Main
{
    private java.util.Scanner input;
    
    private java.util.ArrayList<Character> character_list, key;
    
    private String choice, message;
    
    private char character;
    
    private char[] data;
    
    /*
        ---------------
        | constructor |
        ---------------
    */
    
    Main()
    {
        input = new java.util.Scanner(System.in);
        
        character_list = new java.util.ArrayList<>();
        
        character = ' ';
    }
    
    /*
        ----------------------------------------------------------------------
        } newKey function :
        ----------------------------------------------------------------------
    */
    
    void newKey()
    {
        character_list.clear();
        
        // key.clear();
        
        for (int i = 32; i < 127; i++)
        {
            character_list.add(character++);
        }
        key = new java.util.ArrayList<>(character_list);
        
        java.util.Collections.shuffle(key);

        System.out.println("\n\t _key generated ");
    }
    
    /*
        ----------------------------------------------------------------------
        } getKey function :
        ----------------------------------------------------------------------
    */
    
    void getKey()
    { 
        for (char element_character : key)
        {
            System.out.print(element_character);
        }
    }
    
    /*
        ----------------------------------------------------------------------
        } encrypt function : 
        ----------------------------------------------------------------------
    */
    
    void encrypt()
    {
        System.out.println("\n\t[ insert encryption data ] = ");
        
        message = input.nextLine();
        
        data = message.toCharArray();
        
        for (int o = 0; o < data.length; o++)
        {
            for (int i = 0; i < character_list.size(); i++)
            {
                
                if (data[o] == character_list.get(i))
                {
                    data[o] = key.get(i);
                    
                    break;
                }
            }
        }
        System.out.println("\n\t _encrypted ");
        
        for (char element_character : data)
        {
            System.out.print(element_character);
        }
    }
    
    /*
        ----------------------------------------------------------------------
        } decrypt function : 
        ----------------------------------------------------------------------
    */
    
    void decrypt()
    {
        System.out.println("\n\t[ insert encryption data ] = ");
        
        message = input.nextLine();
        
        data = message.toCharArray();
        
        for (int o = 0; o < data.length; o++)
        {
            for (int i = 0; i < character_list.size(); i++)
            {
                
                if (data[o] == key.get(i))
                {
                    data[o] = character_list.get(i);
                    
                    break;
                }
            }
        }
        System.out.println("\n\t _decrypted ");
        
        for (char element_character : data)
        {
            System.out.print(element_character);
        }
    }
    
    /*
        ----------------------------------------------------------------------
        } execute function : arguent active command
        ----------------------------------------------------------------------
    */
    
    void execute(String active_command)
    {
        if (active_command == "gupt")
        {
            System.out.println("\n { GUPT } active command : [ACCEPT] \n");
            
            while(true)
            {   
                System.out.print(
                    "\n ///// COMMAND ME ///// : "
                );
                
                choice = input.nextLine();
                
                choice = choice.toUpperCase();

                // System.out.println(choice.charAt(0));
                
                if (choice.charAt(0) == 'N')
                {
                    newKey();
                }
                else if (choice.charAt(0) == 'G')
                {
                    getKey();
                }
                else if (choice.charAt(0) == 'E')
                {
                    encrypt();
                }
                else if (choice.charAt(0) == 'D')
                {
                    decrypt();
                }
                else
                {
                    System.out.println("\n\t _terminated");
        
                    System.exit(0);
                }
            }
        }
        else
        {
            System.out.println("\n { GUPT } active command : [DENIED] \n");
        }
    }
    
    
    /*
        -----------------
        | main function |
        -----------------
    */
    
    public static void main(String args[])
    {
        new Main().execute("gupt");
    }
}

