package com.lanfear.vffd;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/forecasts")
@CrossOrigin(origins = "http://localhost:4200")
public class ForecastRecordController {

    private final ForecastRecordService service;

    @Autowired
    public ForecastRecordController(ForecastRecordService service) {
        this.service = service;
    }


}
