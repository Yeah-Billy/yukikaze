import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

/* tslint:disable:member-access variable-name */

@Entity('tags')
export class Tag {
	@PrimaryGeneratedColumn()
	id!: number;

	@Index()
	@Column({ type: 'bigint' })
	user!: string;

	@Index()
	@Column({ type: 'bigint' })
	guild!: string;

	@Index()
	@Column()
	name!: string;

	@Column({ type: 'text', array: true, default: () => 'ARRAY[]::text[]' })
	aliases!: string[];

	@Column()
	content!: string;

	@Column({ default: false })
	hoisted!: boolean;

	@Column({ default: 0 })
	uses!: number;

	@Column({ type: 'bigint', nullable: true })
	last_modified!: string;

	@Column({ type: 'timestamptz', default: () => 'now()' })
	createdAt!: Date;

	@Column({ type: 'timestamptz', default: () => 'now()' })
	updatedAt!: Date;
}
