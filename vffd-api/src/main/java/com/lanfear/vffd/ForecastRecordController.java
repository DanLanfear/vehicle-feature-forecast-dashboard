package com.lanfear.vffd;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/forecasts")
@CrossOrigin(origins = "http://localhost:4200")
public class ForecastRecordController {

    private final ForecastRecordService service;

    @Autowired
    public ForecastRecordController(ForecastRecordService service) {
        this.service = service;
    }

    @GetMapping
    public List<ForecastRecord> findAllRecords() {
        System.out.println("GET");
        return this.service.findAllRecords();
    }



}
