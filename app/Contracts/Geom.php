<?php

namespace App\Contracts;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use InvalidArgumentException;

class Geom extends Model
{
    use HasFactory;

    public static function wktToGeoJSON($wkt) {
        // Check if the WKT is in the format of a POINT
        if (preg_match('/POINT\s*\(([-\d.]+)\s+([-\d.]+)\)/i', $wkt, $matches)) {
            return [
                "type" => "Point",
                "coordinates" => [(float) $matches[1], (float) $matches[2]],
            ];
        }
    
        // Handle invalid or unsupported WKT formats
        throw new InvalidArgumentException("Unsupported WKT format: " . $wkt);
    }
}
