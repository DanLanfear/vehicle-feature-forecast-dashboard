package com.lanfear.vffd;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ForecastRecord {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String vehicleModel;
    private Integer modelYear;
    private String region;
    private String quarter;
    private String featureCode;
    private String featureName;
    private Integer projectedVolume;
    private Float adoptionRate;
    private String lastUpdatedBy;

}
