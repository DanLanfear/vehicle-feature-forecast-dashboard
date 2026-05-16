package com.lanfear.vffd;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class ForecastSummaryDTO {
    private List<Long> forecastRecordIds;
    private Integer totalProjectedVolume;
    private Double averageAdoptionRate;
}
