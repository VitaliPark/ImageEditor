package anaglyph;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.multipart.MultipartFile;

@Controller
@RequestMapping("/anaglyph")
public class AnaglyphController {

    @RequestMapping(method = RequestMethod.POST, value = "/create-anaglyph")
    @ResponseStatus(value = HttpStatus.OK)
    public void createAnaglyph(@RequestParam("leftImage") MultipartFile leftImage,
                               @RequestParam("rightImage") MultipartFile rightImage){

        if(leftImage != null){
            System.out.println(leftImage.getOriginalFilename());
            System.out.println(rightImage.getOriginalFilename());
        }
    }

}
