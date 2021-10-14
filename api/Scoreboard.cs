namespace api
{
    public class Scoreboard
    {
        private int gill;

        public Scoreboard(){
            gill=100;
        }

        public int GetGill(){
            return gill;
        }

        public void SetGill(int gill){
            this.gill = gill;
        }
    }
}