import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';


function SocialLinks ({mobile = false}: {mobile?: boolean}) {

  return (
    <div>
        <div className={mobile ? 'mobile_social_icons' : 'social_icons'}>
            <a href="https://github.com/arthurtham" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/arttham/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://www.x.com/artiestar1/" target="_blank" rel="noreferrer"><XIcon/></a>
        </div>
    </div>
    ); 
}

export default SocialLinks;