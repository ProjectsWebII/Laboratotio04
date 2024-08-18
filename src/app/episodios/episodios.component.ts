import { Component, OnInit } from '@angular/core';
import { EpisodiosService } from '../services/episodios.service';
import { Episode } from '../models/episodio.model';
import { PageEvent, MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';  
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card'; 

@Component({
  selector: 'app-episodios',
  standalone: true,  
  imports: [
    CommonModule,        
    MatPaginatorModule,   
    MatTableModule,       
    MatCardModule         
  ],
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.scss'],
})
export class EpisodiosComponent implements OnInit {
  episodes: Episode[] = [];
  totalEpisodes = 0;
  displayedColumns: string[] = ['id', 'name', 'air_date', 'episode', 'created'];

  constructor(private episodiosService: EpisodiosService) {}

  ngOnInit(): void {
    this.loadEpisodes(1); 
  }

  loadEpisodes(page: number): void {
    this.episodiosService.getEpisodes(page).subscribe((data) => {
      this.episodes = data.results;
      this.totalEpisodes = data.info.count; 
    });
  }

  onPageChange(event: PageEvent): void {
    this.loadEpisodes(event.pageIndex + 1); 
  }
}
