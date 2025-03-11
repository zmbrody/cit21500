const robot =
{
    robot_name : "Robo",
    manufacturer : "Manufacturer Inc.",
    skillset : 
    {
        skill1 : "eating",
        skill2 : "sleeping",
        skill3 : "cooking",
    },
    hasSkill : function(skill)
    {
        if (this.skillset.skill1 == skill || this.skillset.skill2 == skill || this.skillset.skill3 == skill)
        {
            return true;
        }
        else
        {
            return false;
        }
    },
}

function main()
{
    console.log(`The robot is called ${robot.robot_name}. It was manufactured by ${robot.manufacturer}. ` + 
        `It is capable of ${robot.skillset.skill1}, ${robot.skillset.skill2}, and ${robot.skillset.skill3}.`);
    
    let UsrSkill = prompt("What skill do you want to check?")
    UsrSkill = UsrSkill.toLowerCase();
    
    if (robot.hasSkill(UsrSkill))
    {
        console.log(`Yup, the robot can do ${UsrSkill}.`)
    }
    else
    {
        console.log(`Sorry, the robot can't do ${UsrSkill}.`)
    }

}
main();