<?php

namespace Theme\TLCommerce\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TopBarBannerResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'topbar_banner_image' => getFilePath($this['topbar_banner_image']),
            'topbar_banner_link' => $this['topbar_banner_link'],
            'topbar_banner_status' => $this['topbar_banner_status'],
        ];
    }
}
